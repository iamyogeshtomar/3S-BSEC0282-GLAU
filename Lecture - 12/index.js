const express = require(`express`);
const app = express();
const session = require(`express-session`);
const PORT = 3000;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/session/:name/:place`, (req, res) => {
  const { name, place } = req.params;
  res.send(`<h1>Name:${name}, Place:${place}</h1>`);
});

app.get (`/showSession`, (req, res)=>{
    console.log(req.session);
})

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
