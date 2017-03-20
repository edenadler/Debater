var React = require('react');
var Header = React.createClass({
	render:function(){
		return(
			<header className="clearfix">
				<div className="logo">
					<img src="assets/placeholder/logo.png" alt=""/>
				</div>
				<nav>
					<ul>
						<li>Log in</li>
						<li>Sign up</li>
					</ul>
				</nav>
			</header>
			)
	}
})
module.exports = Header