const express = require("express");
const cors = require("cors");
const { connection } = require("./server");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  connection();
});
