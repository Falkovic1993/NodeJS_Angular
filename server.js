const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./config/database');
const passport = require('passport');
const cors = require('cors');

const port = 3000;
const users = require('./routes/users');

//Middleware BodyParser
app.use(bodyParser.json());

app.use(cors());

//Middleware Passport Auth
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
	res.send('It works');
});





app.listen(port, ( err ) => {
	if(err) throw err;
	console.log('Connected on port ' + port);
});