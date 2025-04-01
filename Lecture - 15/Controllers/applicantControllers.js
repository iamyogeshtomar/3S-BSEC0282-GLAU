const Applicant = require(`../Schemas/applicantSchema.js`);
const bcryptjs = require(`bcryptjs`);

const showUserSignUpForm = (req, res) => {
  console.log(`working or not`);
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
  console.log(`working or not`);
  // res.send(newApplicant);
  res.redirect(`/`);
};

const showSignInForm = async(req, res)=>{
  res.render(``)
}

module.exports = {
  newUserSignUpFormSubmit,
  showUserSignUpForm,
};
