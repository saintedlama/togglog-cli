module.exports = function parseDuration(input) {
  const [hours, minutes, seconds] = input.split(':').filter(p => p);

  if (seconds) {
    return (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) * 60 + parseInt(seconds, 10);
  }

  if (minutes) {
    return (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) * 60;
  }

  // Interpret duration provided without : separator as minutes
  if (hours) {
    return parseInt(hours, 10) * 60;
  }

  return null;
};
