/**
 * @jsx React.DOM
 */

'use strict';

var fakeTrans = {
    demand : {
        id: 98,
        message: "In Translation we Trust",
        comment: null,
        langSource: "english",
        langTarget: "français"
    },
    suggestions : [{
        id: 23,
        nbVotes: 5,
        userName: "Lionel",
        message: "Nous croyons en la Traduction",
        comment: null
    }, {
        id: 334,
        nbVotes: 2,
        userName: "yedik",
        message: "Nous avons confiance dans la traduction.",
        comment: "Et dans Tradixo bien sûr"
    }, {
        id: 232,
        nbVotes: 4,
        userName: "Aurel",
        message: "En la Traduction, nous Croyons.",
        comment: null
    }]
};

var emptyTrans = {
    demand: {
        id: 0,
        message: '...',
        langSource: '...',
        langTarget: '...'
    },
    suggestions: []
};

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Translation = require('./Translation');

// To be put properly in a Head pack
require('script!foundation/js/vendor/modernizr.js');
require('script!foundation/js/vendor/jquery.js');
require('script!foundation/js/vendor/fastclick.js');
require('script!foundation/js/foundation.js');
require('script!../parse-init.js');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/main.scss');

var TdxaApp = React.createClass({
    getInitialState: function() {
        return {
            translations : [
                emptyTrans
            ]
        };
    },
    componentDidMount: function() {
        var that = this;
        var query = new Parse.Query('Translation');
        var randomInd = Math.ceil(Math.random() * 499);
        query.equalTo('ind', randomInd);
        query.find().then(function(ts) {
            that.setState({
                translations: ts.map(function(t) {return t.attributes;})
            });
        });
    },
    render: function() {
        var Translations = [];
        this.state.translations.forEach(function(trans) {
            Translations.push(<Translation data={ trans } key={ trans.demand.id} />);
        });
        return (
            <div className='main'>
                <h1 className="text-center"><i className="fi-shuffle"></i></h1>
                { Translations }
                <h1 className="text-center">TOUK !</h1>
            </div>
    );
  }
});

React.renderComponent(<TdxaApp />, document.getElementById('content')); // jshint ignore:line

module.exports = TdxaApp;
