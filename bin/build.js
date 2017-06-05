#!/usr/bin/env node

require('shelljs/global');
const paths = require('path');
const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

const installPackages = () => {
  console.log(chalk.white.bold('Installing Packages'));
  return new Promise((resolve, reject) => {
    let command;
    let args = ['install'];

    if (shouldUseYarn()) {
      command = 'yarn';
    } else {
      command = 'npm';
    }

    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`
        });
        return;
      }
      resolve();
    })
  })
}

const build = (appName) => {
  cp('-r', __dirname + '/../src/.', appName);
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
    cd(appName);
    installPackages().then(() => {
      console.log(chalk.white.bold('Let\'s get started'));
      console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
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
    })
    .catch(error => {
      console.log(chalk.red('An unexpected error occurred'))
      console.log(chalk.red(error));
    });
  });
}

module.exports = build;
