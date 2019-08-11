const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport")
const bodyparser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models")
app.use(routes);

if(process.env.NODE_ENV === "production") {
	app.use(express.static("app/build"));
}

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(passport.initialize());
//require("./config/authConfig.js")(passport, db.User);
app.use(require("cookie-parser")());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", {
	useNewUrlParser: true
})

app.listen(PORT, function(){
	console.log(`࿊ ==> API Server now listening on port ${PORT}!`)
})