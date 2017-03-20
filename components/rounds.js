var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');

var Rounds = React.createClass({
<<<<<<< HEAD
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
=======
	render:function(){
		return(

				<div className = "rounds-info">
					<div className="round-status">ROUND {this.props.round}: {this.props.event}</div>
					<div className="timer">{this.props.roundTimeLeft}</div>
				</div>
				
			)
	}
})

module.exports = Rounds
>>>>>>> Gideon
