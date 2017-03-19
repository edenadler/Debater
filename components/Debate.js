var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var DebateInfo = require('../components/DebateInfo');

var Debate = React.createClass({
	
	render:function(){
		return(
				<div className="debate-wrapper container">
					<div className="debate-title"><h1>THERE SHOULD BE A QUOTA FOR WOMEN IN GOVERNMENT</h1></div>
					<DebateInfo />
				</div>
				
			)
	}
})

module.exports = Debate