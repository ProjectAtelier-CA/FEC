require("dotenv").config();
const axios = require('axios');
const express = require("express");
const path = require("path");

const app = express();

//----- Middleware -----//
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

//----- Routes -----//
app.get('/reviews', (req, res) => {
  res.end();
})

//process.env.AUTH_SECRET (Authorization Header)
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=1
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=37311
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=100

app.listen(8081);
console.log(`Listening at http://localhost:8081`);