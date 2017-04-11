const { expect } = require('chai');
const rhs = require('./index.js');

describe('RHS color conversion', () => {
  it('Should round-trip a color', () => {
    expect(rhs.fromRgb(rhs.hex('165A'))).to.equal('165A');
  });

  it('Should be case-insensitive', () => {
    expect(rhs.hex('165a')).to.equal('4b281d');
  });

  it('Should convert to UCL', () => {
    expect(rhs.ucl('165A')).to.equal('58');
  });

  it('Should convert to a color name', () => {
    expect(rhs.name('165A')).to.equal('Moderate Brown');
  });

  it('Should throw on invalid input', () => {
    expect(() => rhs.fromRgb('fail')).to.throw();
  });
});

describe('RGB color conversion', () => {
  it('Should approximate RHS value from non-matching RGB input', () => {
    expect(rhs.fromRgb('999')).to.equal('190B');
  });
});
