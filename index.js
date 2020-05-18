require("dotenv").config();

const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;
app.use(allowCrossDomain);

API_KEY = process.env.OMDB_API_KEY;
console.log({ API_KEY });
BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

app.get("/", (req, res) => {
  res.send("use the /movie endpoint to get movie info");
});

app.get("/movie", (req, res) => {
  fetch(`${BASE_URL}&t=${req.query.title}`)
    .then((res) => res.json())
    .then((finalJson) => res.send(finalJson));
});

app.listen(port, () => console.log("App up and running"));

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};
