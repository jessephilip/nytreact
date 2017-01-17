// Include React
var React = require("react");

// import helper file
let Helper = require ("../utilities/helper.js");

var Search = React.createClass({

	getInitialState() {
		return {
			results: []
		};
	},

	componentDidUpdate(prevProps, prevState) {

		if (this.state.results !== prevState) {
			console.log("Search.js were updated.");
		}
	},

    // clicklistener for search button
    searchButton: () => {

        // get all input elements
        let elements = document.getElementsByTagName("input");

        // empty array for storing values from input fields
        let values = [];

        // loop through array of input fields and push the user's input into values array
        for (var i = 0; i < elements.length; i++) {
            values.push(elements[i].value);
        }

        // log user input
        console.log(values);

        // build param object to pass to the ajax call
        let param = {
            "api_key": "8292c4752dbc4528bfa8bed4a0d163e0",
            "q": values[0],
            "begin_date": values[1],
            "end_date": values[2]
        };

		let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param(param);
        console.log(url);

		Helper.nytSearch(url).then( function(results) {
			let newState = results.data.response.docs;
			//this.setState({results: newState});
		}).catch(function(error) {
			console.log(error);
		}.bind(this));

        // $.ajax({url: url, method: 'GET'}).done(function(results) {
		// 	let articles = results.response.docs;
		// 	console.log(articles);
		//
		// 	console.log(this);
		//
        // }).fail(function(err) {
        //     throw err;
        // });
    },

	update: function(data) {
		console.log("search updated.");
		this.setState({results: data});

	},

    // Here we render the component
    render: function() {

        return (
            <div>
                <div className="row">

                    <div className="jumbotron text-center">
                        <h1>New York Times Scraper</h1>
                        <p>
                            <em>Search for and annotate articles of interest</em>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="text-center">
                        <h2>Search</h2>

                    </div>

                </div>

                <div className="row">
                    <div className="input-group searchForm">
                        <span className="input-group-addon" id="topicAddOn">
                            <i className="fa fa-search"></i>
                        </span>
                        <input id="aaa" type="text" className="form-control" placeholder="Topic" aria-describedby="topicAddOn"></input>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="input-group searchForm">
                        <span className="input-group-addon" id="startYearAddOn">
                            <i className="fa fa-calendar"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Start Year" aria-describedby="startYearAddOn"></input>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="input-group searchForm">
                        <span className="input-group-addon" id="endYearAddOn">
                            <i className="fa fa-calendar-times-o"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="End Year" aria-describedby="endYearAddOn"></input>
                    </div>
                </div>
                <br/>
                <div className="row text-center">
                    <button className="btn btn-success btn-lg" onClick={this.searchButton}>
                        <i className="fa fa-search"></i>
                    </button>
				<a href="search">Create</a>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
