/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

require('../../styles/Translation.scss');

var Demand = require('./Demand');
var Suggestion = require('./Suggestion');
var emptyTrans = require('../emptyTrans');

var Translation = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.data || emptyTrans
        };
    },
    render: function () {
        var Suggestions = [];
        this.state.data.suggestions.forEach(function(suggestion) {
            Suggestions.push(<Suggestion data={suggestion} key={suggestion.id} />);
        });
        return (
                <div className="translation">
                    <Demand text={this.props.text} data={this.state.data.demand} />
                    { Suggestions }
                </div>
        );
    }
});

module.exports = Translation;
