const express = require(`express`);
const app = express();
const { connect } = require(`mongoose`);
const path = require(`path`);
const PORT = 5000;

(async () => {
  try {
    await connect(`mongodb://127.0.0.1:27017/JobLooto`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.static(path.resolve(__dirname, `views`)));

const applicantRoutes = require(`./Routes/applicantRoutes.js`);
const jobRoutes = require(`./Routes/jobRoutes.js`);

app.use(`/job`, jobRoutes);
app.use(`/user`, applicantRoutes);

app.use(express.urlencoded({ extended: true }));

// app.get(`/`, (req, res) => {
//   res.send(`<h1>Server is working fine!!!</h1>`);
// });

app.get(`/logup`, (req, res) => {
  res.render(`signUpForm.ejs`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
