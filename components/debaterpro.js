var React = require('react');
var io = require("socket.io-client");

var DebaterPro = React.createClass({
    

    render: function(){
        return(
            <div className="debater pro col-md-4 col-md-offset-2 text-center">
              <div className="debater-info">
                <div className="debater-name-side">
                  <span className="debater-name">Eden Adler</span>
                  <span className="debater-side">Pro</span>
                </div>
                <div className="debater-follow-btn">follow</div>
              </div>
              <div className="debater-video">
                <div className="vote-bar"><span className="vote-percent">20%</span><div className="vote-bar-fill"></div></div>
                  <img src="assets/placeholder/pro-debater.png" alt=""></img>
              </div>
            </div>
        )
    }
});


module.exports= DebaterPro;