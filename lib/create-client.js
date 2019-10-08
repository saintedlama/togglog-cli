const togglClient = require('toggl-client');

module.exports = function() {
  const apiToken = process.env.TOGGL_API_TOKEN;

  if (!apiToken) {
    return null;
  }

  return togglClient({ apiToken });
};
