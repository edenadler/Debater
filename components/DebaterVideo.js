var React = require('react');
var $ = require('jquery');

var otReact = require('opentok-react');
var OTSession = otReact.OTSession;
var OTPublisher = otReact.OTPublisher;
var OTStreams = otReact.OTStreams;
var OTSubscriber = otReact.OTSubscriber;
var createSession = otReact.createSession;
var apiKey = "45800442";
var sessionId = "1_MX40NTgwMDQ0Mn5-MTQ5MDAyNzYyMzI5NH4yM3B0MmtQVWlnbGc2WHYzaVNFWVJwa3R-fg";
var otToken = "T1==cGFydG5lcl9pZD00NTgwMDQ0MiZzaWc9OWVmNDFmNmY2NThjNjVlMzFmMTE5ZGYyZmMwMTU5OWYwNzA4ZmVmZDpzZXNzaW9uX2lkPTFfTVg0ME5UZ3dNRFEwTW41LU1UUTVNREF5TnpZeU16STVOSDR5TTNCME1tdFFWV2xuYkdjMldIWXphVk5GV1ZKd2EzUi1mZyZjcmVhdGVfdGltZT0xNDkwMDI3NjU4Jm5vbmNlPTAuMTE1NTQ2NjI0NjM1NDcyODMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ5MjYxNjA1Nw==";


var DebaterVideo = React.createClass({
  render:function() {
    return (
      <OTSession apiKey={apiKey} sessionId={sessionId} token={otToken}>
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    );
  }
})

module.exports = DebaterVideo