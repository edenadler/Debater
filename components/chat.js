var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');

var serverURL = "http://localhost:3000";


var DebateChat = React.createClass({
getInitialState: function(){
	return{
		messages:[],
		topcomments:[]
	}
},
componentDidMount: function(){
	var socket = io.connect(serverURL);
	var self = this;
	socket.on('chat message', function(message) {
		var messages = self.state.messages;
		messages.push(message);
		self.setState({
			messages:messages,
			topcomments:self.state.topcomments
		})
		
	});
	socket.on('like update', function(messages){
		self.setState({
			messages:messages,
			topcomments:self.state.topcomments
		});
	});
	socket.on('top comment', function(message){
		var topcomments = self.state.topcomments;
		topcomments.push(message);
		self.setState({
			messages:self.state.messages,
			topcomments:topcomments
		});
	})
},

handleUpdateLikes:function(index){
	var socket = io.connect(serverURL);
	var messages = this.state.messages;
	messages[index].likes +=1;
	socket.emit('like update', messages);

	if (messages[index].likes == 2){
		socket.emit('top comment', messages[index])
	}




},
sendMessage: function(event){
	event.preventDefault();
	 $('.chat .messages').animate({
 	 scrollTop: $('.chat .messages').get(0).scrollHeight}, 500);
	var socket = io.connect('http://localhost:3000');
	var messageText = $(".chat textarea").val();
	var message = {
		text:messageText,
		author: "Eden",
		likes:0,
		liked:false
	}
	socket.emit('chat message', message);
	$(".chat textarea").val("");
},
render:function(){
	return(
		<div className="debate-chat row">
		<TopComments topcomments = {this.state.topcomments} handleUpdateLikes ={this.handleUpdateLikes}/>
		<Chat messages = {this.state.messages} handleUpdateLikes ={this.handleUpdateLikes} sendMessage = {this.sendMessage}/>
		</div>
		)
}
})
var TopComments = React.createClass({
	handleUpdateLikes:function(index, e){
		this.props.handleUpdateLikes(index)
	},
	render:function(){
		var messages_list = this.props.topcomments.map((message,index) => {
			return(
				<Message message ={message} key = {index} handleUpdateLikes = {this.handleUpdateLikes.bind(this, index)}/>
				)
		})
		return(
			<div className="top-comments col-md-2 col-md-offset-4">
			<h3>Top Comments</h3>
			<div className="messages">
			{ messages_list }
			</div>
			</div>
			)
	}
})
var Chat = React.createClass({
	render:function(){
		return(
			<div  className = 'chat col-md-2'>
			<Chatfeed messages = {this.props.messages} handleUpdateLikes = {this.props.handleUpdateLikes}  />
			<Chatinput sendMessage = {this.props.sendMessage}/>
			</div>
			)
	}
});
var Chatfeed = React.createClass({
	handleUpdateLikes:function(index, e){
		this.props.handleUpdateLikes(index)
	},
	render: function(){
		var messages_list = this.props.messages.map((message,index) => {
			return(
				<Message message ={message} key = {index} handleUpdateLikes = {this.handleUpdateLikes.bind(this, index)}/>
				)
		})
		return(
			<div>
			<h3>Free Chat</h3>
			<div className="messages" id = "test">

			{ messages_list }
			</div>
			</div>
			)
	}
});

var Message = React.createClass({
	render:function(){
		return(
			<div className = "comment">
			<div className="user-name">{this.props.message.author}</div>
			<p className="comment-text">{this.props.message.text}</p>
			<div className="likes">{this.props.message.likes} <i onClick = {this.props.handleUpdateLikes} className="fa fa-heart" aria-hidden="true"></i></div>
			</div>
			)
	}
});

var Chatinput = React.createClass({
	render: function(){
		return(
			<form onSubmit = {this.props.sendMessage} className="chat-input">
			<textarea name="" id="" placeholder="Write your thoughts..."/>
			<input type="submit" />
			</form>
			)


	}
});

module.exports = DebateChat