const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = 3000;

// Connection with database
(async function () {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/swiggy`);
    console.log(`Database is connected successfully!!!`);
  } catch (error) {
    console.log(error.message);
  }
})();

// async function connectDB() {
//   await mongoose.connect(`mongodb://127.0.0.1:27017/swiggy`);
//   console.log(`Database is connected successfully!!!`);
// }
// connectDB();

const Product = require(`./Schemas/productSchema.js`);

// app.use(express.static(path.resolve(__dirname, `public`)));
app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`<h1>This is home route</h1>`);
});

app.get(`/get`, (req, res) => {
  // res.sendFile();
  res.send(`This is get`);
});

app.get(`/post`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `public`, `index.html`));
});

// app.post(`/formdata`, (req, res) => {
//   console.log(req.body);
//   res.send(`<h1>I'm ${req.body.name} and my email is${req.body.email}</h1>`);
//   res.send(`cycle over`);
// });

app.get(`/formdata`, (req, res) => {
  const filePath = path.resolve(__dirname, `public`, `productForm.html`);
  res.sendFile(filePath);
  // console.log(filePath);
});

app.post(`/formdata`, async (req, res) => {
  const { name, price, stock } = req.body;
  // console.log(req.body)
  const newProduct = await Product.create({ name, price, stock });
  res.send(newProduct);
});

app.use((req, res) => {
  res.send(`<h1>This is global middleware</h1>`);
}); //global middleware handler

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
