const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const poll = require("./routes/poll");

const app = express();

//Set up public folder
app.use(express.static(path.join(__dirname, "public")));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Enable CORS
app.use(cors());

app.use("/poll", poll);

const port = 3000;

app.listen(port, () => {
  console.log(`Server start on ${port}`);
});
