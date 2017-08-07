var React = require('react');
var Search = require('./Search.js');



var Main = React.createClass({
	
	render: function(){
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1 className="text-center"> New York Times Articles</h1>
					<p className="lead text-center">Powered by Axios</p> 
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;