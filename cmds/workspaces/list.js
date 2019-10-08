const Table = require('table-layout');
const chalk = require('chalk');

const createClient = require('../../lib/create-client');

module.exports = {
  command: ['list', '$0'],
  desc: 'Lists workspaces',
  builder: {},
  async handler(argv) {
    const client = createClient();

    const workspaces = (await client.workspaces.list()).map(w => ({
      id: chalk.gray(w.id),
      workspace: chalk.blue(w.name),
    }));

    const header = {
      id: 'Id',
      workspace: 'Workspace',
    };

    const table = new Table([header].concat(workspaces));

    console.log();
    console.log(table.toString());
  },
};
