var React = require('react');
var io = require('socket.io-client');
var $ = require('jquery');
var DebaterVideo = require('../components/DebaterVideo');
var serverURL = "http://localhost:3000"



var DebaterPro = React.createClass({
    getInitialState: function() {
        return {
            votepro: 0, 
            follow: 'follow'
        };
    },
    componentDidMount: function(){
        var socket = io.connect(serverURL);
        var self = this;
        socket.on('voted', function(message) {
            self.setState({
              votepro: message[0],
              follow: self.state.follow
            })
        });
    },
    follow: function(){
        this.setState({
          votepro: this.state.votepro,
          follow: ['',<i className="fa fa-check" aria-hidden="true"></i>,'']
        })
    },
    render: function(){
      var percentage = this.state.votepro + '%';
        return(
            <div>
              <div className="debater-info">
                <div className="debater-name-side">
                  <a className="debater-name" data-tip data-for="tooltip-pro">Eden Adler</a>
                  <span className="debater-side">Pro</span>
                </div>
                <div className="debater-follow-btn" key ="1" onClick={this.follow}>{this.state.follow}</div>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent"></span><div className="vote-bar-fill" style={{height: percentage}}></div></div>
                  <img src="assets/placeholder/pro-debater.png" alt=""></img>
              </div>
            </div>
        )
    }
});


module.exports= DebaterPro;