module.exports = {
  command: 'projects <command>',
  aliases: ['pr'],
  desc: 'Access projects',
  builder(yargs) {
    return yargs.commandDir('projects');
  },
  handler() {},
};
