// import mongoose
var mongoose = require("mongoose");

// prepare schema for Mongo database
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({

	// property for the scraped article title
	title: {
        type: String,
        trim: true
    },

	// property for the scraped article date
	date: {
		type: String,
		trim: true
	},

	// property for the scraped article url
    url: {
        type: String,
        trim: true,
		unique: true
    }
});

// create the model from the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// export the Schema
module.exports = Article;
