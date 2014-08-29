'use strict';

describe('Demand', function () {
  var Demand, component;

  beforeEach(function () {
    Demand = require('../../../src/scripts/components/Demand.jsx');
    component = Demand();
  });

  it('should create a new instance of Demand', function () {
    expect(component).toBeDefined();
  });
});
