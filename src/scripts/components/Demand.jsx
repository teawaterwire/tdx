/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Demand.scss');

var Demand = React.createClass({
    render: function () {
        var message = this.props.data.message;
        var text = this.props.text;
        if (text) {
            message = message.replace(new RegExp(text, 'gi'), '<strong>' + text + '</strong>');
        }
        return (
            <div className="demand">
                <div className="row text-center">
                    <div className="demand-lang columns small-5">{ this.props.data.langSource }</div>
                    <div className="columns small-2"> <i className="fi-arrow-right"></i> </div>
                    <div className="demand-lang columns small-5">{ this.props.data.langTarget }</div>
                </div>
                <div className="row">
                    <div className="demand-message columns small-12"
                        dangerouslySetInnerHTML={{
                            __html: message
                        }}>
                    </div>
                </div>
                <div className="row">
                    <div className="demand-comment columns small-10">{ this.props.data.comment }</div>
                </div>
            </div>
          );
    }
});

module.exports = Demand;
