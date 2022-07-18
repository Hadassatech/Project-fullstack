process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apicache = require("apicache");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
let cache = apicache.middleware
app.use(cache('5 minutes'))

app.get("/getdata", function (req, res) {
  const fetchData = async () => {
    try {
      const data = await axios("https://www.omdbapi.com/?s=requiem&apikey=ae16d87c");
      res.send(data.data);
    } catch (e) {
      console.log("err", e);
    }
  };
  fetchData();
});

app.listen(3001);
