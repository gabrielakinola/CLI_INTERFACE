#!/usr/bin/env node

const program = require("commander");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} = require("./index");
const { prompt } = require("inquirer");

//Customer Questions
const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer First name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Customer Last name",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer Phone no",
  },
  {
    type: "input",
    name: "email",
    message: "Customer email",
  },
];
program.version("1.0.0").description("Client Management System");

// program
//   .command("add <firstname> <lastname> <phone> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({ firstname, lastname, phone, email });
//   });

//Add Command
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

program
  .command("find <name>")
  .alias("f")
  .description("find a customer")
  .action((name) => findCustomer(name));

//Remove a customer
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => removeCustomer(_id));

//List customers
program
  .command("list")
  .alias("l")
  .description("list all customers")
  .action(() => listCustomers());

program.parse(process.argv);
