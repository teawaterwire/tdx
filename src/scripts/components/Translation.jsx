/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/Translation.scss');

var Demand = require('./Demand');
var Suggestion = require('./Suggestion');

var Translation = React.createClass({
  render: function () {
    var Suggestions = [];
    this.props.data.suggestions.forEach(function(suggestion) {
        Suggestions.push(<Suggestion data={suggestion} key={suggestion.id} />);
    });
    return (
        <div className="translation">
            <Demand text={this.props.text} data={this.props.data.demand}/>
            { Suggestions }
        </div>
    );
  }
});

module.exports = Translation;
