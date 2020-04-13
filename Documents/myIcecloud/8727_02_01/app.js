const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1> Hello Keiin ITC-18 </h1>");
});

const port = 3000;
app.listen(port, function(error) {
  if (error == true) {
    console.log("some error occurred");
  } else {
    console.log(`listening on localhost:${port}`);
  }
});
