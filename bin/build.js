#!/usr/bin/env node

require('shelljs/global');
const paths = require('path');
const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');

const build = (appName) => {
  cp('-r', __dirname + '/../node_modules/rxapp/.', appName);
  console.log('----------------------------------------------------------');
  figlet.text('React XP', {
    font: 'Graffiti'
  }, function(err, data) {
    if (err) {
        return;
    }
    console.log(data);
    console.log('----------------------------------------------------------');
    console.log(chalk.green.bold('Welcome to ReactXP'));
    console.log('----------------------------------------------------------');
    console.log(chalk.white.bold('Let\'s get started'));
    console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
    console.log(chalk.green('Step 2: install dependencies using yarn or npm'));
    console.log('----------------------------------------------------------');
    console.log(chalk.white.bold('For Web'));
    console.log(chalk.green('Step 1. npm run web-watch'));
    console.log(chalk.black.bold('This compiles the TypeScript code and recompiles it whenever any files are changed.'))
    console.log(chalk.green('Step 2. Open index.html in your browser to view the result.'));
    console.log('----------------------------------------------------------');
    console.log(chalk.white.bold('For React Native'));
    console.log(chalk.green('Step 1. run npm run rn-watch'));
    console.log(chalk.black.bold('This compiles the TypeScript code and recompiles it whenever any files are changed.'));
    console.log(chalk.green('Step 2. run npm start'));
    console.log(chalk.black.bold('This starts the React Native Packager.'));
    console.log('----------------------------------------------------------');
  });
}

module.exports = build;
