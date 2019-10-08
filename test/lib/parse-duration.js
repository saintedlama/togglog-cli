const { expect } = require('chai');
const parseDuration = require('../../lib/parse-duration');

describe('parse-duration', () => {
  it('should parse an number string as minutes', () => {
    const duration = parseDuration('34');

    expect(duration).to.equal(34 * 60);
  });

  it('should parse a string of form 2:44 as hours and minutes', () => {
    const duration = parseDuration('2:44');

    expect(duration).to.equal((2 * 60 + 44) * 60);
  });

  it('should parse a string of form 2:44:11 as hours, minutes and seconds', () => {
    const duration = parseDuration('2:44:22');

    expect(duration).to.equal((2 * 60 + 44) * 60 + 22);
  });
});
