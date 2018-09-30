const express = require('express')
const mongo = require('mongoose')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const app = express()
/* Connecting to database *\
XXX CODE
*/

try {
	mongo.connect(keys.mongoURL, {useNewUrlParser: true})
	console.log('connection success')
}
catch (err) {
	console.error(err);
};

app.use(bodyParser.json())

// get the API endpoints right here
require('./controllers/ApiEndpoints')(app)

const PORT = process.env.PORT || 3000
	let server = app.listen(PORT)
	console.log('App listens on port ' + PORT);
	server.on('error', (err) =>
	{
		console.log (err)
	})
