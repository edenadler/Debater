var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var DebaterVideo = require('../components/DebaterVideo');

var serverURL = "http://localhost:3000"

var DebaterCon = React.createClass({
    getInitialState: function() {
        return {
            votecon: 0, 
            follow: ['',<i className="fa fa-user-plus" aria-hidden="true"></i>,'']
        };
    },
    componentDidMount: function(){
        var socket = io.connect(serverURL);
        var self = this;
        socket.on('voted', function(message) {
            self.setState({
              votecon: message[1],
              follow: self.state.follow
            })
        });
    },
    follow: function(){
        this.setState({
          votecon: this.state.votecon,
          follow: ['',<i className="fa fa-check" aria-hidden="true"></i>,'']
        })
    },
    render: function(){
      var percentage = this.state.votecon + '%';
        return(
          <div>
              <div className="debater-info">
                <div className="debater-name-side">
                  <a className="debater-name" data-tip data-for="tooltip-con">Gideon Keyson</a>
                  <span className="debater-side">CON</span>
                </div>
                <button className="debater-follow-btn" key ="2" onClick={this.follow}>{this.state.follow}</button>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent"></span><div className="vote-bar-fill" style={{height: percentage}}></div>
                </div>
                      <div className="video">
                      {/*<DebaterVideo />*/}
                      <img src="assets/placeholder/con-debater.png" alt=""></img>

                      </div>
              </div>
          </div>
        )
    }
});


module.exports= DebaterCon;


