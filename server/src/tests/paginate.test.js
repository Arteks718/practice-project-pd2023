const { describe, it } = require('mocha');
const { expect } = require('chai');
const { convertPagination } = require('../utils/functions');

describe('Testing function convertPaginate', () => {
  it('should return object { limit, offset }', () => {
    const page = 2;
    const results = 10;
    const result = convertPagination({ page, results });
    expect(result).to.deep.equal({
      limit: results,
      offset: 10,
    });
  });
  it('should return object { limit, offset } when only the value "page" is passed ', () => {
    const page = 2;
    const result = convertPagination({ page });
    expect(result).to.deep.equal({ limit: 8, offset: 8 });
  });
  it('should return object { limit, offset } when only the value "results" is passed ', () => {
    const results = 5;
    const result = convertPagination({ results });
    expect(result).to.deep.equal({ limit: results, offset: 0 });
  });
  it('should return object { limit, offset } when nothing is transmitted', () => {
    const result = convertPagination({});
    expect(result).to.deep.equal({ limit: 8, offset: 0 });
  });
});
