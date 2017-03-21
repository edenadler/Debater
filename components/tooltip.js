var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');

var Tooltip = React.createClass({
  render:function(){
    return(
            <div className="debaters">
               <div className="tooltip-container">
                    <a className="debater-name">{this.props.details.name}</a>
                    <span className="debater-side">{this.props.side}</span>
                    <div className="name-tooltip">
                      <p><i className="fa fa-globe icon" aria-hidden="true"/>{this.props.details.location}</p>
                      <p><i className="fa fa-certificate icon" aria-hidden="true"/>{this.props.details.level}</p>
                      <p><i className="fa fa-users icon" aria-hidden="true"/>{this.props.details.followers}</p>
                    </div>
                </div>
            </div>
      )
  }
})

module.exports = Tooltip