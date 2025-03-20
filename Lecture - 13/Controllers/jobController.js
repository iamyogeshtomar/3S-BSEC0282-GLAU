const Job = require(`../Schemas/jobSchema.js`);

// const showAllJobs = async (req, res) => {
//   const allJobs = await Job.find({});
//   res.render(`homepage.ejs`, { allJobs });
// };

// const showSingleJob = async (req, res) => {
//   const singleJob = await Job.find(req.params.id);
//   res.render(`showSingleJobPage.ejs`, { singleJob });
// };

// const showNewJobForm = async (req, res) => {
//   res.render(`newJobForm.ejs`);
// };

// const addNewJob = async (req, res) => {
//   const {
//     title,
//     description,
//     package,
//     requirements,
//     emplaoymentType,
//     category,
//     location,
//     remote,
//   } = req.body;
//   const newJob = await Job.create({
//     title,
//     description,
//     package,
//     requirements,
//     emplaoymentType,
//     category,
//     location,
//     remote,
//   });
//   res.redirect(`/`);
// };

module.exports = { showAllJobs, showSingleJob, showNewJobForm, addNewJob };
