const Job = require(`../Schemas/jobSchema.js`);

const showAllJobs = async (req, res) => {
  const allJobs = await Job.find({});
  res.render(`homepage.ejs`, { allJobs });
};

const showSingleJob = async (req, res) => {
  const singleJob = await Job.find(req.params.id);
  res.render(`showSingleJobPage.ejs`, { singleJob });
};

const showNewJobForm = async (req, res) => {
  res.render(`newJobForm.ejs`);
};

const addNewJob = async (req, res) => {
  const {
    title,
    description,
    package,
    requirements,
    emplaoymentType,
    category,
    location,
    remote,
  } = req.body;
  await Job.create({
    title,
    description,
    package,
    requirements,
    emplaoymentType,
    category,
    location,
    remote,
  });
  res.redirect(`/`);
};

const showEditForm = async (req, res) => {
  const oldJobDetails = await Job.findById(req.params.jobId);
  res.render(`jobEditForm.ejs`, { oldJobDetails });
};

module.exports = { showAllJobs, showSingleJob, showNewJobForm, addNewJob };
