var React = require('react');
var ReactDOM = require('react-dom');
var Debate = require('./components/Debate');
var DebateChat = require('./components/chat');



var round1={
	round: "1",
	name:"Round 1",
	time:5,
	event:"Introduction"
};
var round2={
	round: "2",
	name:"Round 1",
	time:30,
	event:"Arguments"
};

var debateSettings = {
	rounds:[round1,round2],
	topic: "THERE SHOULD BE A QUOTA FOR WOMEN IN GOVERNMENT",
	
};




ReactDOM.render(
    <div>
    <Debate debateSettings = {debateSettings} />
    <DebateChat />
    </div>,
    document.getElementById('root')
)
