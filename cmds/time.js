module.exports = {
  command: 'time <command>',
  desc: 'Access time entries',
  builder(yargs) {
    return yargs.commandDir('time');
  },
  handler() {},
};
