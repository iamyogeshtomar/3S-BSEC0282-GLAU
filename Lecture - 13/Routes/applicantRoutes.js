const express = require(`express`);
const router = express.Router();
const {newUserSignUpFormSubmit} = require(`../Controllers/applicantControllers.js`)


router.get (`/new`, )

router.post(`/`, newUserSignUpFormSubmit);

module.exports = router;