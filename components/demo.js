var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var ReactDOM = require('react-dom');
var Chat = require('../components/chat');

var App = React.createClass({
	render:function(){
		return(
				<Chat />
			);
	}
})

ReactDOM.render(<Chat />
	,document.getElementById("renderApp"))