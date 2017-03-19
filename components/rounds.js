var React = require('react');
var io = require("socket.io-client");
var VotePro = require('../components/votepro');
var VoteCon = require('../components/votecon');
var DebaterCon = require('../components/debatercon');
var DebaterPro = require('../components/debaterpro');
var DebateInfo = require('../components/DebateInfo');

//what initiates the rounds starting? button click?

var Rounds = React.createClass({
    getInitialState: function() {
        return {
            selections: [false, false]
        };
    },
    onChildToggle: function(id, selected) {
        var selections = this.state.selections;
          
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
    },
    
    render: function() {
        return (
        <div className="debate-wrapper container">
          <div className="debate-title"><h1>Spaces v. Tabs</h1></div>
          <div className="debate-info">
            <DebateInfo/>
          </div>
          <div className="debate row">
            <DebaterCon/>
            <VotePro id = "0" selected={this.state.selections[0]} onToggle={this.onChildToggle}/>
            <DebaterPro/>
            <VoteCon id = "1" selected={this.state.selections[1]} onToggle={this.onChildToggle}/>
          </div>
        </div>
        )
    }
})



module.exports= Rounds;