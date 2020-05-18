require("dotenv").config();

const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

API_KEY = process.env.OMDB_API_KEY;
console.log({ API_KEY });
BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

app.get("/movie", (req, res) => {
  fetch(`${BASE_URL}&t=${req.query.title}`)
    .then((res) => res.json())
    .then((finalJson) => res.send(finalJson));
});

app.listen(port, () => console.log("App up and running"));
