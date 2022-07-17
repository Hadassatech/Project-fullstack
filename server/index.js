process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getdata", function (req, res) {
  const fetchData = async () => {
    try {
      const data = await axios("https://picsum.photos/v2/list");
      res.send(data.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  fetchData();
});

app.listen(3001);
