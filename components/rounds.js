var React = require('react');
var $ = require('jquery');

var Rounds = React.createClass({

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

