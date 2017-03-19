var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var Rounds = require('../components/rounds');

var DebateInfo = React.createClass({
	render:function(){
		return(
		<div className = "debate-info">
		<Rounds />
		<Viewers />
		<Controls />
		
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
			<div className="start-debate">Start Debate</div>
			)
	
	}
});
module.exports = DebateInfo