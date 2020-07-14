// import express from "express";
const express = require('express')

const data = require('./data')
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.productions);
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
