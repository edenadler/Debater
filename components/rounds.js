var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');

var Rounds = React.createClass({
  render:function(){
    return(
        <div className = "rounds-info">
          <div className="round-status">ROUND 1: introduction</div>
          <div className="timer">{this.props.roundTimeLeft}</div>
        </div>
      )
  }
})

module.exports = Rounds
