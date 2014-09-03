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
            <div className="suggestion-votes columns small-2 medium-1 text-right">{ this.props.data.nbVotes }</div>
            <div className="suggestion-user columns small-4 medium-2">
                { this.props.data.username }
            </div>
            <div className="columns small-6 medium-9">
                <div className="row">
                    <div className="suggestion-message columns small-12">{ this.props.data.message }</div>
                </div>
                <div className="row">
                    <div className="suggestion-comment columns small-10">{ this.props.data.comment }</div>
                </div>
            </div>
        </div>
      );
  }
});

module.exports = Suggestion;
