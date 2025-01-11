const express = require(`express`);
const app = express();
const PORT = 5000;

// console.log(app);

app.use(express.json());

app.get(`/`, (req, res) => {
  //   console.log(req);
  //   console.log(res);
  res.json(req);
  res.json(res);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
