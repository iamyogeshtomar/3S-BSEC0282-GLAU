const bcryptjs = require(`bcryptjs`);
const Applicant = require(`../Schemas/applicantSchema.js`);

const showUserSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const newUserSignUpFormSubmit = async (req, res) => {
  const { name, email, phone, dob, gender, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newApplicant = await Applicant.create({
    name,
    email,
    phone,
    dob,
    gender,
    password: hashedPassword,
  });
  // res.send(newApplicant);
  res.redirect(`/`);
};

module.exports = {
  newUserSignUpFormSubmit,
  showUserSignUpForm,
};
