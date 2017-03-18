
var React = require('react');

// TODO: 
// when user clicks one button, disable it and send +1 to the database for the vote score of that debater
// if user clicks the other button, disable the one they clicked, re-enable the other button
// subtract one from the other database, add one to this new databse



var VotePro = React.createClass({
    getInitialState: function(){
      return {clicked: false}
    },

    handleVote: function(){
      this.setState({clicked: !this.state.clicked})
      //SEND +1 vote to the database for the debater who has the name debaterName
    },


    render: function(){
        return(
            <div>
              <button ref="pro" className="vote-btn" disabled={this.state.clicked} onClick={this.handleVote} debaterName={this.props.proName}>Vote</button>
              //debaterName: props.proName comes from the debater component that it is attached to
            </div>
        )
    }
});

var VoteCon = React.createClass({
    getInitialState: function(){
      return {clicked: false}
    },

    handleVote: function(){
      this.setState({clicked: !this.state.clicked})
      //SEND +1 vote to the database for that debater who has the name debaterName
    },


    render: function(){
        return(
            <div>
              <button ref="con" className="vote-btn" disabled={this.state.clicked} onClick={this.handleVote} debaterName={this.props.conName}>Vote</button>
              //debaterName: props.conName comes from the debater component that it is attached to
            </div>
        )
    }
});



module.exports= Voting;
