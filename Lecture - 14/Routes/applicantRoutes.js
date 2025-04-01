const express = require(`express`);
const router = express.Router();
const {
  newUserSignUpFormSubmit,
  showUserSignUpForm,
} = require(`../Controllers/applicantControllers.js`);

router.get(`/signup`, showUserSignUpForm);

router.post(`/signup`, newUserSignUpFormSubmit);

module.exports = router;
