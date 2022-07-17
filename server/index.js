// NODE_EXTRA_CA_CERTS= './node_modules/node_extra_ca_certs_mozilla_bundle/ca_bundle/ca_intermediate_root_bundle.pem '

// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// const axios = require("axios");

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });


// axios.get('http://fs1.co.il/bus/bitcoin.php')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getdata', function (req, res) {
    const fetchData = async () => {
        try {
        const data = await axios('https://picsum.photos/v2/list')
        res.send(data.data);}
        catch(e) {
            console.log("err", e);
        }
    }
    fetchData();
})

app.listen(3001);