// console.log('hello node');
// process.stdout.write('hello world');
// we don't have a document object in node
// console.log(document);

// npm - node package manager 
// requiring a package
const chalk = require('chalk');

// here we require a node internal module
const crypto = require('crypto');

const randomString = crypto.randomBytes(64).toString('Hex');

// console.log(randomString);

// console.log(chalk.blue('Hello, npm!'));

const addNumbers = require('./add');
// console.log(addNumbers(2, 4));

// import the functions from <function.js

// const functions = require('./functions');
const { goodBye, greet } = require('./functions');

// console.log(goodBye(), greet());

const supervillains = require('supervillains');

// console.log(supervillains.all);

// console.log(supervillains.random());