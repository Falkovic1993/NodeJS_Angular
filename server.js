//const express = require('express');
//const app = express();
const bodyParser = require('body-parser');
//const database = require('./config/database');
const passport = require('passport');
const cors = require('cors');
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);


const port = 3000;
const users = require('./routes/users');
const messages = require('./routes/messages');

//Middleware Formidable


//Middleware BodyParser
app.use(bodyParser.json());

app.use(cors());

//Middleware Passport Auth
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/messages', messages);

app.get('/', (req, res) => {
	res.send('It works');
	res.end();
});

io.on('connection', (socket) => {

	// Log whenever a user connects
	console.log('user connected');

	// Log whenever a client disconnects from our websocket server
	socket.on('disconnect', function(){
			console.log('user disconnected');
	});

	// When we receive a 'message' event from our client, print out
	// the contents of that message and then echo it back to our client
	// using `io.emit()`
	socket.on('message', (data) => {
			console.log("Message Received: " + data);
			io.emit('message', data);    
	});
});



http.listen(port, ( err ) => {
	if(err) throw err;
	console.log('Connected on port ' + port);
});