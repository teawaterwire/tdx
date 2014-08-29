/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Suggestion.scss');

var Suggestion = React.createClass({
  render: function () {
    return (
        <div className="suggestion row">
            <div className="suggestion-votes column small-1 text-right">{ this.props.data.nbVotes }</div>
            <div className="column small-3 text-center">{ this.props.data.userName }</div>
            <div className="suggestion-message column small-8">{ this.props.data.message }</div>
        </div>
      );
  }
});

module.exports = Suggestion;
