var React = require('react');
var $ = require('jquery');

var otReact = require('opentok-react');
var OTSession = otReact.OTSession;
var OTPublisher = otReact.OTPublisher;
var OTStreams = otReact.OTStreams;
var OTSubscriber = otReact.OTSubscriber;
var createSession = otReact.createSession;
var apiKey = "45800442";
var sessionId = "2_MX40NTgwMDQ0Mn5-MTQ5MDA5MjgxNjIxM341V1FyM3MrZHY0aVowQ2dYbXQxakEwWjl-fg";
var otToken = "T1==cGFydG5lcl9pZD00NTgwMDQ0MiZzaWc9YWZmMTM2Yjk5NjNlYTVlODQ1NWFkNThhNTZlNzE0YjE0ZDY2NzkzMTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3dNRFEwTW41LU1UUTVNREE1TWpneE5qSXhNMzQxVjFGeU0zTXJaSFkwYVZvd1EyZFliWFF4YWtFd1dqbC1mZyZjcmVhdGVfdGltZT0xNDkwMDkyODQzJm5vbmNlPTAuNzQ5MTY1MDcxNDM5OTYyNSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDkyNjgxMjQz";


var DebaterVideo = React.createClass({
  render:function() {
    return (
      <OTSession apiKey={apiKey} sessionId={sessionId} token={otToken}>
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    );
  }
})

module.exports = DebaterVideo