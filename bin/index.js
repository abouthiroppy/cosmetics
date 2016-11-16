#!/usr/bin/env node

'use strict';

const fs       = require('fs');
const path     = require('path');
const commands = process.argv.slice(2);

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log('Version: ' + require('../package.json').version);
  process.exit(0);
}

const conf = require('rc')('cosmetics');

if (!conf.hasOwnProperty('config')) {
  console.error('error');
  process.exit(0);
}

const code = fs.readFileSync(path.resolve(process.cwd(), commands[0]), 'utf-8');

console.log(code)
