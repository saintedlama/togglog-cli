const Table = require('table-layout');
const chalk = require('chalk');

const listProjects = require('../../lib/list-projects');
const createClient = require('../../lib/create-client');

module.exports = {
  command: ['list', '$0'],
  desc: 'Lists projects',
  builder: {},
  async handler() {
    const client = createClient();

    const projects = (await listProjects(client)).map(p => ({
      projectId: chalk.gray(p.id),
      name: chalk.blue(p.name),
      workspaceId: chalk.gray(p.workspace.id),
      workspace: chalk.blue(p.workspace.name),
    }));

    const header = {
      projectId: 'Project Id',
      name: 'Name',
      workspaceId: 'Workspace Id',
      workspace: 'Workspace',
    };

    const table = new Table([header].concat(projects));

    console.log();
    console.log(table.toString());
  },
};
