var React = require('react');
var $ = require('jquery');

var HomePage = React.createClass({
	render:function(){
		return(
		<div className="homepage">
		<header className="clearfix">
		<div className="logo">
			<img src="assets/placeholder/logo1.jpg" alt=""></img>
		</div>
		<div className="search-container">
		<div className="search">
			<h1>SEARCH BY TOPIC OR DEBATERS</h1>
			<i className="fa fa-search" aria-hidden="true"></i>
		</div>
		<nav>
			<ul>
				<li className="main-debates">Debates</li>
				<li className="main-debaters">Debaters</li>
				<li>Log in</li>
				<li>SIgn up</li>
			</ul>
		</nav>
		</div>
	</header>
	<div className="hero">
	</div>
	<div className="container">
	<div className="topdebates">
		<h3>Top Debates</h3>
		<div className="row">
		<div className="card-container col-md-3">
		<div className="debate-card" onClick = {this.props.handleClickedProjectItem}>
			<div className="debate-topic">SHOULD YOU HIRE A JUNIOR DEVELOPER?</div>
			<div className="live">LIVE</div>
			<div className="debate-card-info">
				<span>790 viewers</span><br />
				<span>Now</span>
			</div>
		</div>
		</div>
		<div className="card-container col-md-3">
		<div className="debate-card" onClick = {this.props.handleClickedProjectItem}>
			<div className="debate-topic">The two state solution is outdated</div>
			
			<div className="debate-card-info">
				<span>1034 viewers</span><br />
				<span>A week ago</span>
			</div>
		</div>
		</div>
		<div className="card-container col-md-3">
		<div className="debate-card" onClick = {this.props.handleClickedProjectItem}>
			<div className="debate-topic">The EU is finished</div>
			<div className="debate-card-info">
				<span>500 viewers</span><br />
				<span>Five Days AGo</span>
			</div>
		</div>
		</div>
		<div className="card-container col-md-3">
		<div className="debate-card" onClick = {this.props.handleClickedProjectItem}>
			<div className="debate-topic">Trump/'s ban is justified</div>
			<div className="debate-card-info">
				<span>2034 viewers</span><br />
				<span>Four days ago</span>
			</div>
		</div>
		</div>
		</div>
	</div>
</div>
</div>
)
	}
})
module.exports = HomePage