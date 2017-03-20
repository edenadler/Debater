var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');
var ReactTooltip = require('react-tooltip');

var DebaterCon = React.createClass({
    getInitialState: function() {
        return {
            votecon: 0, 
            follow: ['',<i className="fa fa-user-plus" aria-hidden="true"></i>,'']
        };
    },
    componentDidMount: function(){
        var socket = io.connect('http://localhost:3000');
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
                  <ReactTooltip class="name-tooltip" id="tooltip-con" aria-haspopup="true" place="left">
                    <p className="tooltip-title"><i className="fa fa-user-circle icon" aria-hidden="true"></i>Gideon Keyson</p>
                    <p className="tooltip-map"><i className="fa fa-globe icon" aria-hidden="true">Amsterdam, The Netherlands</i></p>
                  </ReactTooltip>
                  <span className="debater-side">CON</span>
                </div>
                <button className="debater-follow-btn" key ="2" onClick={this.follow}></button>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent"></span><div className="vote-bar-fill" style={{height: percentage}}></div></div>
                <img src="assets/placeholder/con-debater.png" alt=""></img>
              </div>
          </div>
        )
    }
});


module.exports= DebaterCon;


