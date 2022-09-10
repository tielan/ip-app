const express = require("express");
const app = express();
const port = 3000;
let ioMapper = {};

app.get("/gip", (req, res) => {
  res.send(ioMapper.host || '');
});

app.get("/ip", (req, res) => {
  ioMapper = req.query;
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
