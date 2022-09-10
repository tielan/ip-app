const express = require("express");
const app = express();
const port = 3000;
let ioMapper = {};

app.get("/app", (req, res) => {
  res.redirect("http://" + ioMapper.ip + ":9902");
});

app.get("/gip", (req, res) => {
  res.send(ioMapper.ip || "");
});

app.get("/ip", (req, res) => {
  let ip = getClientIp(req).match(/\d+.\d+.\d+.\d+/);
  ip = ip ? ip.join(".") : null;
  ioMapper = { ip };
  console.log(ip);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function getClientIp(req) {
  return (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress ||
    ""
  );
}
