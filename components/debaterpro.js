var React = require('react');
var io = require("socket.io-client");

var DebaterPro = React.createClass({
    getInitialState: function() {
        return {
            votepro: 0, 
            follow: 'follow'
        };
    },
    componentDidMount: function(){
        var socket = io.connect('http://localhost:3000');
        var self = this;
        socket.on('votepro', function(message) {
            self.setState({
              votepro: message,
              follow: self.state.follow
            })
        });
    },
    follow: function(){
        this.setState({
          votepro: this.state.message,
          follow: ['',<i className="fa fa-check" aria-hidden="true"></i>,'']
        })
    },


    render: function(){
        return(
            <div>
              <div className="debater-info">
                <div className="debater-name-side">
                  <a className="debater-name">Eden Adler</a>
                  <span className="debater-side">Pro</span>
                </div>
                <div className="debater-follow-btn" onClick={this.follow}>{this.state.follow}>follow</div>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent">{this.state.votepro}</span><div className="vote-bar-fill"></div></div>
                  <img src="assets/placeholder/pro-debater.png" alt=""></img>
              </div>
            </div>
        )
    }
});


module.exports= DebaterPro;