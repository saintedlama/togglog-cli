const parseDuration = require('../lib/parse-duration');
const chalk = require('chalk');
const listProjects = require('../lib/list-projects');
const createClient = require('../lib/create-client');

module.exports = {
  command: 'log <project> <duration> [description]',
  desc: 'Logs a time entry',
  builder(yargs) {
    yargs.positional('project', {
      describe: 'Name or partial name of the project',
    });

    yargs.positional('duration', {
      describe: 'Duration in format hh:mm:ss or hh:mm or mm. To log 2 hours 2:00 or 120 can be provided as duration',
    });

    yargs.positional('description', {
      describe: 'Textual description of what you did',
    });
  },
  async handler(argv) {
    const client = createClient();

    const projects = await listProjects(client);

    const matchedProject = projects.filter(p => p.name.toLowerCase().includes(argv.project.toLowerCase()))[0];

    if (!matchedProject) {
      console.error(`No project found that matches ${argv.project}`);
      process.exit(2);
    }

    const duration = parseDuration(argv.duration);
    console.log(`${chalk.gray('Logging time entry')}`);

    const workspaceIdOutput = `(id: ${matchedProject.workspace.id})`;
    console.log(`Workspace: ${chalk.blue(matchedProject.workspace.name)} (${chalk.gray(workspaceIdOutput)}`);

    const projectIdOutput = `(id: ${matchedProject.id})`;
    console.log(`Project:   ${chalk.blue(matchedProject.name)} ${chalk.gray(projectIdOutput)}`);

    try {
      const created = await client.timeEntries.create({
        pid: matchedProject.id,
        start: new Date().toISOString(),
        duration: duration,
        description: argv.description,
      });

      console.log();
      console.log(`${chalk.gray('Logged time entry')}`);
      console.log(`Start:     ${chalk.blue(created.start)}`);
      console.log(`Stop:      ${chalk.blue(created.stop)}`);
      console.log(`Billable:  ${chalk.blue(created.billable)}`);
    } catch (e) {
      // TODO: Have a error output interface
      console.log(e.body);
    }
  },
};
