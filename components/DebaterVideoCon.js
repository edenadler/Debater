var React = require('react');
var $ = require('jquery');

// var otReact = require('opentok-react');
// var OTSession = otReact.OTSession;
// var OTPublisher = otReact.OTPublisher;
// var OTStreams = otReact.OTStreams;
// var OTSubscriber = otReact.OTSubscriber;
// var createSession = otReact.createSession;

var apiKey = "45800442";
var sessionId = "2_MX40NTgwMDQ0Mn5-MTQ5MDA5MjgxNjIxM341V1FyM3MrZHY0aVowQ2dYbXQxakEwWjl-fg";
var token = "T1==cGFydG5lcl9pZD00NTgwMDQ0MiZzaWc9YWZmMTM2Yjk5NjNlYTVlODQ1NWFkNThhNTZlNzE0YjE0ZDY2NzkzMTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3dNRFEwTW41LU1UUTVNREE1TWpneE5qSXhNMzQxVjFGeU0zTXJaSFkwYVZvd1EyZFliWFF4YWtFd1dqbC1mZyZjcmVhdGVfdGltZT0xNDkwMDkyODQzJm5vbmNlPTAuNzQ5MTY1MDcxNDM5OTYyNSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDkyNjgxMjQz";


var DebaterVideo = React.createClass({
  componentDidMount:function(){
   var session = OT.initSession(apiKey, sessionId)
        .on('streamCreated', function(event) {
          var options = {width: '100%', height: '100%', insertMode: 'append'}
          var subscriber = session.subscribe(event.stream, 'videoContainerPro', options);
        })
        .connect(token, function(error) {    
          var options = {width: '100%', height: '100%', insertMode: 'append'}    
          var publisher = OT.initPublisher('videoContainerCon',options);
          session.publish(publisher);
        });
},
  render:function() {
    return (
          <div style={{width: this.props.videoWidth + "px", height:this.props.videoWidth + "px"}} className = "videoContainer" id ="videoContainerCon" >
          </div>


    );
  }
});

module.exports = DebaterVideo