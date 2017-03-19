var React = require('react');
var io = require("socket.io-client");
var Rounds = require('../components/rounds');
var VotePro = require('../components/votepro');
var VoteCon = require('../components/votecon');
var DebaterCon = require('../components/debatercon');
var DebaterPro = require('../components/debaterpro');

var Debate = React.createClass({
    getInitialState: function() {
        return {
            selections: [false, false]
        };
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
            selections: selections
        });
        
        socket.emit('vote'+id, selections[id]);
    },

    render: function(){
        return(
            <div>
              <div className="debate-wrapper container">
                <div className="debate-title"><h1>THERE SHOULD BE A QUOTA FOR WOMEN IN GOVERNMENT</h1></div>
                <Rounds/>
              </div> 
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