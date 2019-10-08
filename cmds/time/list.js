const Table = require('table-layout');
const chalk = require('chalk');
const humanizeDuration = require('humanize-duration');
const dayjs = require('dayjs');

const createClient = require('../../lib/create-client');
const listProjects = require('../../lib/list-projects');

module.exports = {
  command: ['list', '$0'],
  desc: 'Lists time entries',
  builder: {},
  async handler() {
    const client = createClient();

    const projects = await listProjects(client);

    const timeEntries = (await client.timeEntries.list()).map(t => ({
      project: chalk.blue(projectName(projects, t.pid)),
      start: dayjs(t.start).format('YYYY-MM-DD HH:mm'),
      duration: chalk.blue(humanizeDuration(t.duration * 1000)),
      billable: chalk.gray(t.billable),
    }));

    const header = {
      project: 'Project',
      start: 'Start',
      duration: 'Duration',
      billable: 'Billable',
    };

    const table = new Table([header].concat(timeEntries));

    console.log();
    console.log(table.toString());
  },
};

function projectName(projects, id) {
  return (projects.filter(p => p.id == id)[0] || {}).name;
}
