const express = require('express');
//const app = express();
//const bodyParser = require('body-parser');
const database = require('./config/database');
const passport = require('passport');
const cors = require('cors');
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
//const formidable = require('express-formidable');
var formidable = require('formidable');
var path = require('path');
var multer = require('multer');

const port = process.env.PORT || 8080;
const users = require('./routes/users');
const messages = require('./routes/messages');

app.use(express.static(path.join(__dirname + '/public')));

// headers and content type
/*
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
*/



var DIR = './uploads/';
 
var upload = multer({dest: DIR});
 
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
 
app.use(multer({
	dest: DIR,
	rename: function (fieldname, filename) {
		return filename + Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path);
	}
}));

app.post('/api', function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			return res.end(err.toString());
		}
 
		res.end('File is uploaded');
	});
});




/*
app.use(function (req, res, next) {
	var form = new formidable.IncomingForm({
		encoding: 'utf-8',
		uploadDir: './tmp',
		multiples: true,
		keepExtensions: true
	});
	form.once('error', console.log);
	form.parse(req, function (err, fields, files) {
		Object.assign(req, {fields, files});
		next();
	});
});
*/



//Middleware BodyParser
//app.use(bodyParser.json());

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
		console.log('Message Received: ' + data);
		io.emit('message', data);    
	});
});


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

http.listen(port, ( err ) => {
	if(err) throw err;
	console.log('Connected on port ' + port);
});