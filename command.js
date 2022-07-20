const program = require("commander");
const { addCustomer, findCustomer } = require("./index");

program.version("1.0.0").description("Client Management System");

program.command("add <firstname> <lastname> <phone> <email> ");
