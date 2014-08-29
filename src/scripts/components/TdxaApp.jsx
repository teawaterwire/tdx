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

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Translation = require('./Translation');

// To be put properly in a Head pack
require('script!foundation/js/vendor/modernizr.js');
require('script!foundation/js/vendor/jquery.js');
require('script!foundation/js/vendor/fastclick.js');
require('script!foundation/js/foundation.js');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/main.scss');

var TdxaApp = React.createClass({
  render: function() {
    return (
        <div className='main'>
            <Translation data={ fakeTrans } />
            <h1 className="text-center">TOUK !</h1>
        </div>
    );
  }
});

React.renderComponent(<TdxaApp />, document.getElementById('content')); // jshint ignore:line

module.exports = TdxaApp;
