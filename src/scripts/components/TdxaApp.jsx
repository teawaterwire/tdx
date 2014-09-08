/**
 * @jsx React.DOM
 */

'use strict';


var Router = require('react-router');
var React = require('react/addons');

var Translation = require('./Translation');
var Search = require('./Search');
var emptyTrans = require('../emptyTrans');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;
// Export Parse so the devtools can find it
(window !== window.top ? window.top : window).Parse = Parse;


var App = React.createClass({
    getInitialState: function() {
        return {
            translations : [emptyTrans, emptyTrans, emptyTrans]
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
        this.state.translations.forEach(function(trans, i) {
            Translations.push(<Translation data={trans} key={trans.demand.id + i} />);
        });
        return (
            <div>
                <this.props.activeRouteHandler />
                <div className='main'>
                    <h1 className="text-center"><i className="fi-shuffle"></i></h1>
                    { Translations }
                    <div className="text-center">
                        <h1><img src={require('../../images/T3XO_happy.png')} /></h1>
                        <h6>by <a href="//twitter.com/teawaterwire">@teawaterwire</a></h6>
                    </div>
                </div>
            </div>
    );
  }
});


var routes = (
    <Router.Routes location="hash">
        <Router.Route name="app" path="/" handler={App}>
            <Router.Route name="search" path=":q" handler={Search} />
            <Router.NotFoundRoute handler={Search} />
        </Router.Route>
    </Router.Routes>
    );

React.renderComponent(routes, document.getElementById('content')); // jshint ignore:line

module.exports = App;
