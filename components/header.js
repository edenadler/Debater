var React = require('react');
var Header = React.createClass({
	render:function(){
		return(
			<header className="clearfix">
				<div className="logo">
					<img src="assets/placeholder/logo1.jpg" alt=""/>
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