#!/usr/bin/env node

require('shelljs/global');
const paths = require('path');
const fs = require('fs');

const build = (appName) => {
  cp('-r', __dirname + '/../node_modules/rxapp/.', appName);
}

module.exports = build;
