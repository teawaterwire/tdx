'use strict';

describe('Main', function () {
  var TdxaApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TdxaApp = require('../../../src/scripts/components/TdxaApp.jsx');
    component = TdxaApp();
  });

  it('should create a new instance of TdxaApp', function () {
    expect(component).toBeDefined();
  });
});
