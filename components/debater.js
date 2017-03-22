var React = require('react');
var io = require('socket.io-client');
var $ = require('jquery');
var DebaterVideoCon = require('../components/DebaterVideoCon');
var DebaterVideoPro = require('../components/DebaterVideoPro');



var Debater = React.createClass({
    getInitialState: function() {
        return {
            percent: [0,0], 
            follow: [['',<i className="fa fa-user-plus" aria-hidden="true"></i>,''],['',<i className="fa fa-user-plus" aria-hidden="true"></i>,'']]
        };
    },
    componentDidMount: function(){
        var socket = io.connect();
        var self = this;
        socket.on('voted', function(message) {
            self.setState({
              percent: message.percent,
              follow: self.state.follow
            })
        });
    },
    follow: function(){
        this.setState({
          percent: this.state.percent,
          follow: [['',<i className='fa fa-check' aria-hidden='true'></i>,''],['',<i className='fa fa-check' aria-hidden='true'></i>,'']]
        })
    },
    render: function(){

      var percentage = this.state.percent + '%';
      var currentlyDebating = false;
      var nobodyDebating = false
      var videoWidth = 180;
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
        videoWidth = 300
      }
      else if (nobodyDebating){
        videoWidth = 250
      }
      else {
        videoWidth = 180
      }
        return(
            <div>
              <div className="voting">
                <div className="vote-bar"><span className="vote-percent"></span><div className={"vote-bar-fill-"+this.props.side} style={{height: this.state.percent[parseInt(this.props.index)]+"%"}}>{parseInt(this.state.percent[parseInt(this.props.index)])+"%"}</div></div>
              </div>
              <div className="debater-video" style={{width: videoWidth}}>
                    {this.props.side =="con" ? <DebaterVideoCon videoWidth ={videoWidth}/> :<DebaterVideoPro videoWidth = {videoWidth} /> }
                
                  {/*<img style={{width: videoWidth + "px"}} src={"assets/placeholder/"+this.props.side+"-debater.png"} alt=""></img>*/}

              </div>
            </div>
        )
    }
});


module.exports= Debater;