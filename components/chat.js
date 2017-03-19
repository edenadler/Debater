var React = require('react');
var io = require("socket.io-client");
var Chat = React.createClass({
	render:function(){
		return(
			<div  className = 'chat col-md-2'>
			<Chatfeed />
			<Chatinput />
			</div>
			)
	}
});
var Chatfeed = React.createClass({
	getInitalState: function(){
		return{data: {
			messages: []
		}}
	},
	componentDidMount: function(){
		var socket = io.connect('http://localhost:3000');
		var data = this.state.data
		
		socket.on('chat message', function(message) {
			data = this.state.data
			var messages = this.state.data.messages
			messages.push(message)
			this.setState({
			data: {
				messages:messages
				}
			})
			
		})
	},

	sendMessage: function(){
		var data = this.state.data
    	var messages = data.messages
    	var socket = io.connect('http://localhost:3000');
    	message = $("input[type=submit]").val()
		socket.emit('chat message', message)
	},
	render: function(){
		return(
			<div>
			<h3>Free Chat</h3>
			<Message />
			<Message />

			</div>
			)
	}
});

var Message = React.createClass({
	render:function(){
		return(
			<div className = "comment">
			<div className="user-name">Eden Adler</div>
			<p className="comment-text">I totally agree with Barack</p>
			<div className="likes">17 <i className="fa fa-heart" aria-hidden="true"></i></div>
			</div>
			)
	}
});

var Chatinput = React.createClass({
	render: function(){
		return(
			<form onSubmit = {this.handleSubmit} className="chat-input">
			<textarea name="" id="" placeholder="Write your thoughts..." />
			<input type="submit" />
			</form>
			)


	}
});

module.exports = Chat