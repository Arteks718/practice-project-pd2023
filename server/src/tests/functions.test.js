const { describe, it } = require('mocha');
const { expect } = require('chai');
const { mapStringToValues } = require('../utils/functions');

describe('Testing functions.js', () => {
  describe('Testing mapStringToValues', () => {
    it('should return true:boolean when passed "true":string', () => {
      const result = mapStringToValues('true');
      expect(result).to.be.true;
    });
    it('should return false:boolean when passed "false":string', () => {
      const result = mapStringToValues('false');
      expect(result).to.be.false;
    });
    it('should return undefined when passed "undefined":string', () => {
      const result = mapStringToValues('undefined');
      expect(result).to.be.undefined;
    });
    it('should return null when passed "null":string', () => {
      const result = mapStringToValues('null');
      expect(result).to.be.null;
    });
    it('should return NaN when passed "NaN":string', () => {
      const result = mapStringToValues('NaN');
      expect(result).to.be.NaN;
    });
    it('should return 4:number when passed "4":string', () => {
      const result = mapStringToValues('4');
      expect(result).to.equal(4);
    });
    it('should return 4.1:number when passed "4.1":string', () => {
      const result = mapStringToValues('4.1');
      expect(result).to.equal(4.1);
    });
    it('should return "4qwe":string when passed "4qwe":string', () => {
      const stringParam = '4qwe';
      const result = mapStringToValues(stringParam);
      expect(result).to.equal(stringParam);
    });
    it('should return "qwerty":string when passed "qwerty":string', () => {
      const stringParam = 'qwerty';
      const result = mapStringToValues(stringParam);
      expect(result).to.equal(stringParam);
    });
  });
});
