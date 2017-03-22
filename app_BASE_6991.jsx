var React = require('react');
var ReactDOM = require('react-dom');
var Debate = require('./components/Debate');
var DebateChat = require('./components/chat');
var Header = require('./components/header');

var round1 = {
	round: 1,
	name:"Round 1",
	time:2,
	event:"Introduction"
};
var round2={
	round: 2,
	name:"Round 2",
	time:3,
	event:"Arguments"
};
var round3={
	round: 3,
	name:"Round 3",
	time:4,
	event:"Conclusion"
};

var debateSettings = {
	rounds:[round1,round2,round3],
	topic: "THERE SHOULD BE A QUOTA FOR WOMEN IN GOVERNMENT",
	
};

var pro = {
	name: "Eden Adler",
	side: "pro",
	location: "Michigan, USA", 
	level: "Debater",
	followers: "30.2k followers"
};

var con = {
	name: "Gideon Keyson",
	side: "con",
	location: "Amsterdam, The Netherlands",
	level: "Debater",
	followers: "29.4k followers"
};




ReactDOM.render(
		<div>
			<Header />
			<main>
				<div className="debate-wrapper container">
			   		<Debate debateSettings = {debateSettings} pro={pro} con={con}/>
	   		 		<DebateChat />
	   		 	</div>
	   		</main>
   		 </div>,
    document.getElementById('root')
)
