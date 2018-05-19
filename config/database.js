const mysql = require('mysql');

global.db = mysql.createConnection({
	host:'mysql29.unoeuro.com',
	user:'emilfk_dk',
	password:'Falken11',
	database:'emilfk_dk_db'
});



//mysql://b09cb87df8ff2a:61e9557f@us-cdbr-iron-east-04.cleardb.net/heroku_4d5dd86fbee2f56?reconnect=true
db.connect( err => {
	if(err){
		console.log(err);
		console.log('Database error');
		process.exit();
	}
	console.log('Connected to database');
});

module.exports = {};


