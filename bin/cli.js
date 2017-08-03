#!/usr/bin/env node

const program = require('commander')
const spawn = require('child_process').spawn;
const package = require('../package.json');
const chalk = require('chalk');

const build = require('./build');

program
.version(package.version)
  .usage('<keywords>')
  .parse(process.argv);

if (program.args.length > 0) {
  build(program.args[0]);
} else if (program.args.length < 1) {
  console.log(chalk.red('Please supply a name for your new React XP app.'));
}
