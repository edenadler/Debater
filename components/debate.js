var React = require('react');
var io = require("socket.io-client");
var DebateInfo = require('../components/DebateInfo');
var VotePro = require('../components/votepro');
var VoteCon = require('../components/votecon');
var DebaterCon = require('../components/debatercon');
var DebaterPro = require('../components/debaterpro');

var Debate = React.createClass({
    getInitialState: function(){
        return{
            roundTimeLeft:this.props.debateSettings.rounds[0].time,
            round:1,
            firstTime:true,
            selections: [false, false],
            
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
            selections: this.state.selections

        });
        if (this.state.roundTimeLeft <0) {
            clearInterval(interval);
            if (this.state.firstTime){
                this.setState({
                    roundTimeLeft: this.props.debateSettings.rounds[this.state.round-1].time,
                    round:this.state.round,
                    firstTime:false,
                    selections: this.state.selections

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
    onChildToggle: function(id, selected) {
        var selections = this.state.selections;
        var socket = io.connect('http://localhost:3000');

          if (id == 0){
            selections[0] = selected;
            selections[1] = !selected;
          }
          else if (id == 1){
            selections[1] = selected;
            selections[0] = !selected;
          }
    
        this.setState({
            roundTimeLeft:this.props.debateSettings.rounds[this.state.round].time,
            round:this.state.round,
            firstTime: this.state.firstTime,
            selections: selections
        });
        
        socket.emit('vote'+id, selections[id]);
    },

    render: function(){
        return(
            <div>
                <div className="debate-title"><h1>{this.props.debateSettings.topic}</h1></div>
                <DebateInfo roundTimeLeft = {this.state.roundTimeLeft} startDebate = {this.startDebate}/>
              <div className="debate row">
                <div className="debater con col-md-4 col-md-offset-2 text-center">
                    <DebaterCon/>
                    <VoteCon id = "1" selected={this.state.selections[1]} onToggle={this.onChildToggle}/> 
                </div>
                <div className="debater pro col-md-4 col-md-offset-2 text-center">
                    <DebaterPro/>
                    <VotePro id = "0" selected={this.state.selections[0]} onToggle={this.onChildToggle}/>
                </div>
                </div>
            </div>
        )
    }
});




module.exports= Debate;