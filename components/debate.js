var React = require('react');
var io = require("socket.io-client");
var Rounds = require('../components/rounds');

var Debate = React.createClass({
    getInitialState: function() {
        return {
            round: [false, false]
        };
    },

    render: function(){
        return(
            <div>
              <div className="debate-wrapper container">
                <div className="debate-title"><h1>THERE SHOULD BE A QUOTA FOR WOMEN IN GOVERNMENT</h1></div>
                <Rounds/>
              </div>  
            </div>
        )
    }
});




module.exports= Debate;