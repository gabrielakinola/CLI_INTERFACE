const program = require("commander");
const { addCustomer, findCustomer } = require("./index");
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

program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

program
  .command("find <name>")
  .alias("f")
  .description("find a customer")
  .action((name) => findCustomer(name));

program.parse(process.argv);
