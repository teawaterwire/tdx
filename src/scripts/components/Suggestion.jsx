/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Suggestion.css');

var Suggestion = React.createClass({
  render: function () {
    return (
        <div className="row">
            <div className="column small-1 text-right">{ this.props.data.nbVotes }</div>
            <div className="column small-2 text-center">{ this.props.data.userName }</div>
            <div className="column small-9 text-center">{ this.props.data.message }</div>
        </div>
      );
  }
});

module.exports = Suggestion;
