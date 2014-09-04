'use strict';

describe('Search', function () {
  var Search, component;

  beforeEach(function () {
    Search = require('../../../src/scripts/components/Search.jsx');
    component = Search();
  });

  it('should create a new instance of Search', function () {
    expect(component).toBeDefined();
  });
});
