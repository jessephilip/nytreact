// Include React
var React = require("react");

var Main = React.createClass({

	getInitialState() {
		return {
			articles: []
		};
	},

	setArticles: function(newArticles) {
		this.setState({articles: newArticles});
	},

    // Here we render the component
    render: function() {

        return (
            <div className="container">
                <div>

                    {/* Added this.props.children to dump all of the child components into place */}
                    {this.props.children}

                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
