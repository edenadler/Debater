var React = require('react');
var ReactDOM = require('react-dom');
var Debate = require('./components/debate');
var DebateChat = require('./components/chat');




ReactDOM.render(
		<div>
		    <Debate/>
		</div>,
    <div>
    <DebateChat />
    </div>,
    document.getElementById('root')
)
