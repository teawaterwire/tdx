/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
(window !== window.top ? window.top : window).Router = Router;
require('../../styles/Search.scss');

var Translation = require('./Translation');
var nbResultsMaxDefault = 5;
var searchPlaceholder = '"dude", "love", "cordialement", "great"...';
var loaderUrl = require('../../images/loader.gif');

var Search = React.createClass({
    nbResultsMax: nbResultsMaxDefault,
    getInitialState: function() {
        return {
            text: '',
            loading: false,
            translations: []
        };
    },
    componentDidMount: function() {
        if (this.props.params.q) {
            this.search(this.props.params.q);
        }
    },
    handleChange: function(e) {
        var text = e.target.value.trim();
        if (text !== '') {
            this.search(text);
        } else {
            this.nbResultsMax = nbResultsMaxDefault;
            this.setState({
                loading: false,
                text: text,
                translations: []
            });
        }
    },
    fetchMore: function() {
        this.nbResultsMax += this.nbResultsMax;
        this.search(this.state.text);
    },
    search: function(text) {
        this.setState({
                text: text,
                loading: true
            });
        var query = new Parse.Query('Translation');
        query.matches('demand.message', new RegExp(text, 'i'));
        query.limit(this.nbResultsMax);
        query.find().then(function(translations) {
            if (text === this.state.text) {
                Router.transitionTo('search', {q: text});
                this.setState({
                    loading: !translations,
                    translations: translations.map(function(t) {
                        return t.attributes;
                    })
                });
            }
        }.bind(this));
    },
    render: function() {
        var translations = [];
        var loader, t3xo, moreButton;
        var text = this.state.text;
        if (this.state.loading) {
            loader = (<div className="search-loader text-center" >
                                <img src={loaderUrl} />
                            </div>);
        }
        this.state.translations.forEach(function(trans, i) {
            if (i === this.nbResultsMax - 1) {
                moreButton = (<div onClick={this.fetchMore} className="button secondary row">
                                    <i className="fi-plus"></i>
                                </div>);
            } else {
                translations.push(<Translation text={text} data={trans} key={'t' + i + trans.demand.id} />);
            }
        }.bind(this));
        if (!translations.length && text !== '' ) {
            t3xo = (<div className="search-t3xo text-center" key="T3XO_sad">
                                <img src={require('../../images/T3XO_sad.png')} />
                            </div>);
        }
        return (
            <div className="search">
                <div className="row collapse">
                    <div className="columns small-1 small-offset-2">
                        <span className="prefix"><i className="fi-magnifying-glass"></i></span>
                    </div>
                    <div className="columns small-7 end">
                        <input onChange={this.handleChange} defaultValue={this.props.params.q} className="search-box" type="text" placeholder={searchPlaceholder} />
                    </div>
                </div>
                { loader || t3xo }
                { translations }
                { moreButton }
            </div>
        );
    }
});

module.exports = Search;
