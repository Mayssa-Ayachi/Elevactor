require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authenticationRoutes");
const requireAuth = require("./middlewares/requireAuthentification");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://admin:admin@cluster0.dyryeyg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});
app.get("/", requireAuth, (req, res) => {
  res.send(`email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
