// import axios
let axios = require ("axios");

module.exports = {

	nytSearch: function(url) {
		return axios.get(url);
	}

};
