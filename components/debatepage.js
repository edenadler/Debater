var React = require('react');
var Debate = require('../components/debate');
var DebateChat = require('../components/chat');
var Header = require('../components/header');

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
var round4={
	round: 4,
	name:"Round 4",
	time:4,
	event:"Wrap up"
};
var round5={
	round: 5,
	name:"Round 4",
	time:4,
	event:"Questions"
};
var debateSettings = {
	rounds:[round1,round2,round3,round4,round5],
	topic: "SHOULD YOU HIRE A JUNIOR DEVELOPER?",
	
};

var pro = {
	name: "Eden Adler",
	side: "pro",
	location: "Michigan, USA", 
	level: "Debater",
	followers: "30.2k followers",
	versus:"In Favor"
};

var con = {
	name: "Gideon Keyson",
	side: "con",
	location: "Amsterdam, The Netherlands",
	level: "Debater",
	followers: "29.4k followers",
	versus:"Against"

};



var DebatePage = React.createClass({
	render:function(){
		return(
			<div>
			<Header />
			<main>
				<div className="debate-wrapper container">
			   		<Debate debateSettings = {debateSettings} pro={pro} con={con}/>
			   	</div>

	   		 		<DebateChat />
	   		</main>
   		 </div>
			)
	}
})
module.exports = DebatePage