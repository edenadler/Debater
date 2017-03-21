var React = require('react');
var $ = require('jquery');
var Rounds = require('../components/rounds');

var DebateInfo = React.createClass({
	render:function(){
		return(
		<div className = "debate-info">
		<div className="next-round">NEXT ROUND STARTS IN <span className="time-left">{this.props.timeUntilNextRound}</span></div>
		<Rounds roundTimeLeft = {this.props.roundTimeLeft} round = {this.props.round} event = {this.props.event}/>
		<div className ="viewers-controls">
		<Viewers />
		<Controls startDebate = {this.props.startDebate}/>
		</div>
		</div>
		)
	}
});

var Viewers = React.createClass({
	render:function(){
		return(
			<div className="viewers">4000 viewers</div>
			)
	
	}
});
var Controls = React.createClass({
	render:function(){
		return(
			<div onClick = {this.props.startDebate} className="start-debate">Start Debate</div>
			)
	
	}
});
module.exports = DebateInfo