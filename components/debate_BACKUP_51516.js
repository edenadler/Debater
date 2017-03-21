var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var DebateInfo = require('../components/DebateInfo');
var Debater = require('../components/debater');
var VotePro = require('../components/votepro');
var VoteCon = require('../components/votecon');

var serverURL = "http://localhost:3000";


var Debate = React.createClass({
	getInitialState: function(){
		return{
			roundTimeLeft:this.props.debateSettings.rounds[0].time,
			round:this.props.debateSettings.rounds[0].round,
			firstTime:true,
			event:this.props.debateSettings.rounds[0].event,
			timeUntilNextRound: 5,
			selections: [false, false],
<<<<<<< HEAD
			firstVote: true,
			debater: "pro"

			

=======
            firstVote: true,
>>>>>>> 73581b57ba25992ca3765ea28be1c730429a43ad
		}
	},
	componentDidMount: function(){
		var socket = io.connect(serverURL);
		var self = this;
		socket.on('start debate', function(){
		var countDown = setInterval(function(){self.tick(countDown)}, 1000);
		})
	},
	startDebate: function(e){
		var socket = io.connect(serverURL);
		$(".start-debate").hide();
		socket.emit('start debate')
	},
	tick: function(interval){
	    this.setState({
	    	roundTimeLeft: this.state.roundTimeLeft - 1,
	    	round:this.state.round,
	    	firstTime: this.state.firstTime,
			event:this.state.event,
			debater: this.state.debater


	    },function(){
	    	if (this.state.roundTimeLeft <0) { //round "segment" finished eg: timer under 0	
		    	clearInterval(interval);
		    	if (this.state.firstTime){ //secondtime current round
					this.setState({
		    			roundTimeLeft: this.props.debateSettings.rounds[this.state.round-1].time,
		    			round:this.state.round,
		    			firstTime:false,
						event:this.state.event,
						debater:"con"

		    		},function(){
		    			var self = this
		    		var countDown = setInterval(function(){self.tick(countDown)}, 1000);
		    		});
		    	}
		    	else{ //next round
		    		if (this.state.round == this.props.debateSettings.rounds.length){
		    			this.setState({
		    				finsihed:true,
		    				roundTimeLeft:0,
		    				event:"Debate finished"
		    			})
		    			return
		    		}
		    		$(".next-round").css("visibility", "visible")
					$(".next-round .time-left").addClass("start-ticking")
					$(".round-status").addClass('one-pop');
					setTimeout(function(){$(".round-status").removeClass('one-pop')},2000)

		    		this.setState({  //set state for next round
		    			roundTimeLeft: this.props.debateSettings.rounds[this.state.round].time,
		    			event:this.props.debateSettings.rounds[this.state.round].event,
		    			round:this.state.round + 1,
						firstTime:true,
						timeUntilNextRound:5,
						debater:"pro"
		    		},function(){
		    			var self = this

						var countDown = setInterval(function(){ // time until next round
							self.setState({
								timeUntilNextRound:self.state.timeUntilNextRound-1
		    					},function(){
		    						if (self.state.timeUntilNextRound === 0) { //actual next round starting
		    								clearInterval(countDown);
		    								$(".next-round").css("visibility", "hidden");
											$(".next-round .time-left").removeClass("start-ticking");
											var countDown = setInterval(function(){self.tick(countDown)}, 1000);
		    							}
		    						})

						},1000) // time until next round
		    		}); //set state for next round
		    	} //next round 
		} //round "segment" finished eg: timer under 0	
	}); //initial countdown
	}, //function "tick" closing
	onChildToggle: function(id, selected) {
        var selections = this.state.selections;
        var socket = io.connect(serverURL);

          if (id == 0){
            selections[0] = selected;
            selections[1] = !selected;
          }
          else if (id == 1){
            selections[1] = selected;
            selections[0] = !selected;
          }
    
        socket.emit('vote', {selections: selections, first: this.state.firstVote});

        this.setState({
            roundTimeLeft:this.props.debateSettings.rounds[this.state.round].time,
            round:this.state.round,
            firstTime: this.state.firstTime,
            selections: selections,
            firstVote: false
        });
        
    },
	render:function(){
		return(
				  <div>
               <div className="debate-title"><h1>{this.props.debateSettings.topic}</h1></div>
                <DebateInfo roundTimeLeft = {this.state.roundTimeLeft} startDebate = {this.startDebate} timeUntilNextRound = {this.state.timeUntilNextRound} round = {this.state.round} event ={this.state.event}/>
              <div className="debate row">
<<<<<<< HEAD
                <div className="debater con col-md-4 col-md-offset-1 text-center">
                    <DebaterCon debater = {this.state.debater}/>
                    <VoteCon id = "1" selected={this.state.selections[1]} onToggle={this.onChildToggle}/> 
                </div>
                <div className="debater pro col-md-4 col-md-offset-2 text-center">
                    <DebaterPro debater = {this.state.debater}/>
=======
                <div className="debater con col-md-4 col-md-offset-2 text-center">
                    <Debater name={this.props.con.name} side={this.props.con.side} index="2" location={this.props.con.location} level={this.props.con.level} followers={this.props.con.followers}/>
                    <VoteCon id = "1" selected={this.state.selections[1]} onToggle={this.onChildToggle}/> 
                </div>
                <div className="debater pro col-md-4 col-md-offset-2 text-center">
                    <Debater name={this.props.pro.name} side={this.props.pro.side} index="1" location={this.props.pro.location} level={this.props.pro.level} followers={this.props.pro.followers}/>
>>>>>>> 73581b57ba25992ca3765ea28be1c730429a43ad
                    <VotePro id = "0" selected={this.state.selections[0]} onToggle={this.onChildToggle}/>
                </div>
                </div>
            </div>
			)
	}
})

module.exports = Debate