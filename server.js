// import express
let express = require ("express");

// set up express
let app = express();

// establish port for listening
const PORT = 3000 || process.env.PORT;

// import Morgan
let logger = require ("morgan");

// import bodyParser
let bodyParser = require ("body-parser");

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// serve static files
app.use(express.static("./public"));

// -------------------------------------------------

// import mongoose
let mongoose = require ("mongoose");

// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/nytreact");
let db = mongoose.connection;

db.on("error", (err) => {
  console.log("Mongoose Error: ", err);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});

// run server and listen on PORT
app.listen(PORT, () => {
	console.log("NY Times React listening on: " + PORT);
});
