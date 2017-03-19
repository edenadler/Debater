var React = require('react');
var io = require("socket.io-client");

var DebaterCon = React.createClass({
    getInitialState: function() {
        return {
            votecon: 0, 
            follow: 'follow'
        };
    },
    componentDidMount: function(){
        var socket = io.connect('http://localhost:3000');
        var self = this;
        socket.on('votecon', function(message) {
            self.setState({
              votecon: message,
              follow: self.state.follow
            })
        });
    },
    follow: function(){
        this.setState({
          votecon: this.state.message,
          follow: ['',<i className="fa fa-check" aria-hidden="true"></i>,'']
        })
    },
    render: function(){
        return(
          <div>
              <div className="debater-info">
                <div className="debater-name-side">
                  <a className="debater-name">Gideon Keyson</a>
                  <span className="debater-side">CON</span>
                </div>
                <button className="debater-follow-btn" onClick={this.follow}>{this.state.follow}</button>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent">{this.state.votecon}</span><div className="vote-bar-fill"></div></div>
                <img src="assets/placeholder/con-debater.png" alt=""></img>
              </div>
          </div>
        )
    }
});


module.exports= DebaterCon;


