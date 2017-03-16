var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
  render:function(){
    return (<div>Hello world</div>)
  }
})




ReactDOM.render(
    <div>
    <Test/>
    </div>,
    document.getElementById('root')
)
