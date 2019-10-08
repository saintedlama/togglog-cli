module.exports = async function(client) {
  const projects = [];

  const workspaces = await client.workspaces.list();

  for (const workspace of workspaces) {
    const workspaceProjects = await client.workspaces.projects(workspace.id);
    projects.push(...workspaceProjects.map(p => Object.assign(p, { workspace })));
  }

  return projects;
};
