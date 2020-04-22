// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const browser = require('browser-detect');
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/temp/index.html");
});

app.get('/blogs/1', (req, res) => {
  res.sendFile(__dirname + '/temp/blog.html');
})

app.get('/blogs', (req, res) => {
  res.sendFile(__dirname + '/temp/blogSelector.html');
})

app.get('/comingSoon', (req, res) => {
  res.sendFile(__dirname + '/temp/comingSoon.html');
})
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
