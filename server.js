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
var upload = multer({ dest: 'uploads/'});
var fs = require('fs');




const port = process.env.PORT || 8080;
const users = require('./routes/users');
const messages = require('./routes/messages');

app.use(express.static(path.join(__dirname + '/public')));

// headers and content type
/*
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	next();
});
*/
var type = upload.single('photo');

app.post('/upload', type, function (req,res) {
	console.log(req.file);

	/** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
	var tmp_path = req.file.path;

	/** The original name of the uploaded file
      stored in the variable "originalname". **/
	var target_path = 'uploads/' + req.file.originalname;

	/** A better way to copy the uploaded file. **/
	var src = fs.createReadStream(tmp_path);
	var dest = fs.createWriteStream(target_path);
	src.pipe(dest);
	//fs.unlink(tmp_path); //deleting the tmp_path
	src.on('end', function() { return res.json({msg:'It worked!!'}); });
	src.on('error', function(err) { return res.json({msg:'It failed...!!'}); });

});

// formidable 
app.use(function (req, res, next) {
	var form = new formidable.IncomingForm({
		encoding: 'utf-8',
		uploadDir: './tmp/images',
		multiples: true,
		keepExtensions: true
	});
	form.once('error', console.log);
	form.parse(req, function (err, fields, files) {
		Object.assign(req, {fields, files});
		next();
	});
});




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