const express = require("express");
const bodyParser = require("body-parser");
const uc = require("./UserController");
const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("backend1");
});

uc(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
