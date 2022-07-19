const mongoose = require("mongoose");
const Customer = require("./models/customer");

//connect to db
mongoose
  .connect("mongodb://localhost:27017/customercli")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

//Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    db.close();
  });
};

//Find customer
const findCustomer = (name) => {
  //Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    }
  );
};

module.exports = {
  addCustomer,
  findCustomer,
};
