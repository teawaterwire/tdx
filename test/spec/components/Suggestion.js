'use strict';

describe('Suggestion', function () {
  var Suggestion, component;

  beforeEach(function () {
    Suggestion = require('../../../src/scripts/components/Suggestion.jsx');
    component = Suggestion();
  });

  it('should create a new instance of Suggestion', function () {
    expect(component).toBeDefined();
  });
});
