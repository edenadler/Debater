var React = require('react');
var io = require('socket.io-client');
var $ = require('jquery');
var DebaterVideo = require('../components/DebaterVideo');



var Debater = React.createClass({
    getInitialState: function() {
        return {
            percent: 0, 
            follow: ['',<i className="fa fa-user-plus" aria-hidden="true"></i>,''],
        };
    },
    componentDidMount: function(){
        var socket = io.connect('http://localhost:3000');
        var self = this;
        socket.on('voted', function(message) {
            self.setState({
              percent: message[0],
              follow: self.state.follow
            })
        });
    },
    follow: function(){
        this.setState({
          percent: this.state.percent,
          follow: ['',<i className='fa fa-check' aria-hidden='true'></i>,'']
        })
    },
    render: function(){
      var percentage = this.state.percent + '%';
      var currentlyDebating = false;
      var nobodyDebating = false
      var videoWidth = 150;
      if(this.props.currentDebater == this.props.side){
        currentlyDebating = true
      }
      else if (this.props.currentDebater == "none"){
        nobodyDebating = true
      }
      else{
        currentlyDebating = false
      }
      if(currentlyDebating){
        videoWidth = 280
      }
      else if (nobodyDebating){
        videoWidth = 200
      }
        return(
            <div>
              <div className="debater-info">
                <div className="tooltip-container">
                  <div className="debater-name-side">
                    <a className="debater-name">{this.props.name}</a>
                    <span className="debater-side">{this.props.side}</span>
                      <header className="tooltip">
                        <p><i className="fa fa-globe icon" aria-hidden="true">{this.props.location}</i></p>
                        <p><i className="fa fa-certificate icon" aria-hidden="true"></i>{this.props.level}</p>
                        <p><i className="fa fa-users icon" aria-hidden="true">{this.props.followers}</i></p>
                      </header>
                  </div>
                </div>
                <div className="debater-follow-btn" key ={this.props.index} onClick={this.follow}>{this.state.follow}</div>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent"></span><div className="vote-bar-fill" style={{height: percentage}}></div></div>
                    { /*this.props.side =="con" ? <DebaterVideoCon /> :<DebaterVideoPro /> */}
                    <DebaterVideo videoWidth = {videoWidth} />
                
                  {/*<img style={{width: videoWidth + "px"}} src={"assets/placeholder/"+this.props.side+"-debater.png"} alt=""></img>*/}
                  
              </div>
            </div>
        )
    }
});


module.exports= Debater;