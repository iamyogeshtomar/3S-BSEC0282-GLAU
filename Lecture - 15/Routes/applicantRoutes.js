const express = require(`express`);
const router = express.Router();
const {
  newUserSignUpFormSubmit,
  showUserSignUpForm,
} = require(`../Controllers/applicantControllers.js`);

router.get(`/signup`, showUserSignUpForm);

router.get(`/verify`, (req, res) => {
  res.send(`<h1>verify</h1>`);
});

router.post(`/signup`, newUserSignUpFormSubmit);

module.exports = router;
