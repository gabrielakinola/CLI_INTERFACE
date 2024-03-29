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

const updateCustomer = (_id, customer) => {
  Customer.findOneAndUpdate({ _id }, customer).then(() => {
    console.info("Customer Updated");
    db.close();
  });
};

const removeCustomer = (_id) => {
  Customer.findOneAndDelete({ _id }).then(() => {
    console.info("Customer Removed");
    db.close();
  });
};

const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
    db.close();
  });
};

//Export functions as objects and either store in a variable whne importing them or import as objects

module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
};

//Cli
