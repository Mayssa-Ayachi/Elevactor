const express = require('express');
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
 

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());




 app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
  });