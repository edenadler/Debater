var React = require('react');
var ReactDOM = require('react-dom');

var HomePage = require('../components/HomePage');
var DebatePage = require('../components/DebatePage');
var App = React.createClass({
	getInitialState:function(){
		return{
			isShowMain:true
		}
	},
	handleClickedProjectItem:function(){
		this.setState({isShowMain:false})
	},
	render:function(){
		return(
			<div>
			{this.state.isShowMain ? <HomePage handleClickedProjectItem={this.handleClickedProjectItem}/> : <DebatePage handleClickedProjectItem={this.handleClickedProjectItem}/>}
   		 </div>
			)
	}
})

ReactDOM.render(
		<div>
			<App />
   		 </div>,
    document.getElementById('root')
)
