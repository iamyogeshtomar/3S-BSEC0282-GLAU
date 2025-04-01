const express = require(`express`);
const router = express.Router();
// const Job = require(`../Schemas/jobSchema.js`);

const {
  showAllJobs,
  showSingleJob,
  showNewJobForm,
  addNewJob,
} = require(`../Controllers/jobController.js`);

// router.get(`/`, async (req, res) => {
//   const allJobs = await Job.find({});
//   res.render(`homepage.ejs`, { allJobs });
// });

// router.get(`/new`, (req, res) => {
//   res.render(`newJobForm.ejs`);
// });

// router.post(`/`, async (req, res) => {
//   const {
//     title,
//     package,
//     description,
//     requirements,
//     employmentType,
//     category,
//     location,
//   } = req.body;
//   const newJob = await Job.create({
//     title,
//     package,
//     description,
//     requirements,
//     employmentType,
//     category,
//     location,
//   });
//   res.redirect(`/`);
// });

// route.get(`/signup`, (req, res) =>{
//     const {name, email, phone, password, confirmPassword} = req.body;
//     if (password === confirmPassword){

//     }
// })

router.get(`/`, showAllJobs);

router.get(`/:jobId`, showSingleJob);

router.get(`/new`, showNewJobForm);

router.post(`/`, addNewJob);

module.exports = router;
