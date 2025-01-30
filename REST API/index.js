const express = require(`express`);
const app = express();
const ejs = require(`ejs`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = 3000;

// IIFE
(async function () {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/swiggy`);
    console.log(`Database is connected successfully!!!`);
  } catch (error) {
    console.log(error.message);
  }
})();

app.set(`view engine`, `ejs`);
app.use(express.static(path.resolve(__dirname, `views`)));

app.use(express.urlencoded({ extended: true }));

const Product = require(`./Schemas/productSchema.js`);

app.get(`/`, (req, res) => {
  res.send(`This is product route`);
});

app.get(`/products`, async (req, res) => {
  const allProducts = await Product.find();
  //   console.log(allProducts);
  res.render(`allProducts.ejs`, { allProducts });
});

app.get(`/product/new`, (req, res) => {
  res.render(`newProducts.ejs`);
});

app.post(`/products`, (req, res) => {
  const { name, price, stock } = req.body;
  const newProduct = Product.create({ name, price, stock });
  res.redirect(`/products`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http:localhost:${PORT}`);
});
