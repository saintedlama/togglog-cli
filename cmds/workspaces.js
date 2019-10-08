module.exports = {
  command: 'workspaces <command>',
  aliases: ['ws'],
  desc: 'Access worspaces',
  builder(yargs) {
    return yargs.commandDir('workspaces');
  },
  handler() {},
};
