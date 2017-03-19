var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var DebateInfo = require('../components/DebateInfo');

var Debate = React.createClass({
	getInitialState: function(){
		return{
			roundTimeLeft:this.props.debateSettings.rounds[0].time,
			round:1,
			firstTime:true,
			
		}
	},
	componentDidMount: function(){
		var socket = io.connect('http://localhost:3000');
		var self = this;
		socket.on('start debate', function(){
		var countDown = setInterval(function(){self.tick(countDown)}, 1000);
		})
	},
	startDebate: function(){
		var socket = io.connect('http://localhost:3000');
		socket.emit('start debate')
	},
	tick: function(interval){
	    this.setState({
	    	roundTimeLeft: this.state.roundTimeLeft - 1,
	    	round:1,
	    	firstTime:false,

	    });
		if (this.state.roundTimeLeft <0) {
	    	clearInterval(interval);
	    	if (this.state.firstTime){
				this.setState({
	    			roundTimeLeft: this.props.debateSettings.rounds[this.state.round-1].time,
	    			round:this.state.round,
	    			firstTime:false,

	    		});
	    		var self = this
	    		var countDown = setInterval(function(){self.tick(countDown)}, 1000);

	    	}else{
	    		this.setState({
	    			roundTimeLeft: this.props.debateSettings.rounds[this.state.round].time,
	    			round:this.state.round + 1,

	    		});
	    	}
		}	
	    
	    	


	    
  	},
	render:function(){
		return(
				<div className="debate-wrapper container">
					<div className="debate-title"><h1>{this.props.debateSettings.topic}</h1></div>
					<DebateInfo roundTimeLeft = {this.state.roundTimeLeft} startDebate = {this.startDebate}/>
				</div>
				
			)
	}
})

module.exports = Debate