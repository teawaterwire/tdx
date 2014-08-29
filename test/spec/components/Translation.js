'use strict';

describe('Translation', function () {
  var Translation, component;

  beforeEach(function () {
    Translation = require('../../../src/scripts/components/Translation.jsx');
    component = Translation();
  });

  it('should create a new instance of Translation', function () {
    expect(component).toBeDefined();
  });
});
