const mongoose = require("mongoose");

//connect to db
mongoose
  .connect("mongodb://localhost:27017/customercli")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
