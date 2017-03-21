var React = require('react');

// TODO: 
// when user clicks one button, disable it and send +1 to the database for the vote score of that debater
// if user clicks the other button, disable the one they clicked, re-enable the other button
// subtract one from the other database, add one to this new databse


var VotePro = React.createClass({
    onToggle: function(){
      this.props.onToggle(this.props.id, !this.props.selected);
      //SEND +1 vote to the database for the debater who has the name debaterName
    },
    isActive: function(){
      return "vote-btn" + ((this.props.selected === true)? " disabled" : "")
    },

    render: function(){
        return(
            <div>
              <button className={this.isActive()} disabled={this.props.selected} onClick={this.onToggle}>Vote</button>
            </div>
        )
    }
});

module.exports= VotePro;