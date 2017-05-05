#!/usr/bin/env node

const program = require('commander')
const spawn = require('child_process').spawn;
const package = require('../package.json');

const build = require('./build');

program
.version(package.version)
  .usage('<keywords>')
  .option('-n, --new, [name]', 'Create the application')
  .parse(process.argv);

if (program.new) {
  spawn(build(program.new[0]), { shell: true, stdio: 'inherit' });
}