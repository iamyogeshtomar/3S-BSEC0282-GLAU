const express = require(`express`);
const app = express();
const PORT = 5000;

// console.log(app);

app.use(express.json()); //Middlewares

app.get(`/`, (req, res) => {
  //   console.log(req);
  //   console.log(res);
  // res.json(req);
  // res.json(res);
  console.log(req);
  console.log(res);
});

app.get(`/query`, (req, res) => {
  console.log(req.query);
  res.sendFile(
    `<h1>My name is ${req.query.name} and I'm ${req.query.age} old</h1>`
  );
});

app.get(`/params/:name/:place`, (req, res) => {
  res.send(
    `<h1>My name is ${req.params.name} and I live in ${req.params.place}</h1>`
  );
});

// function searchEngine (params){
//   // logic
// }

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
  // console.log(express);
  // console.log(app);
});
