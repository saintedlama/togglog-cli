#!/usr/bin/env node
const pkg = require('./package.json');

const createClient = require('./lib/create-client');

if (!createClient()) {
  console.log('Please set the environment variable "TOGGL_API_TOKEN". See https://toggl.com/app/profile');
  process.exit(1);
}

const yargs = require('yargs');

yargs
  .scriptName('togglog')
  .commandDir('cmds')
  .demandCommand()
  .version(pkg.version)
  .help().argv;
