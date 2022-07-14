const express = require('express');
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const createError = require('http-errors')
const cors = require("cors");
require('dotenv').config()
require('./helpers/Init_mongodb')
const AuthRoute = require('./routes/Auth.route')
const {verifyAccessToken} = require('./helpers/jwt_helper')


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

 

app.get('/' , verifyAccessToken, async (req, res, next) => {
  console.log(req.headers['authorization'])
  res.send('Hello from express.')
})

app.use('/auth', AuthRoute)


app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
  });