const mysql = require('mysql');



global.db = mysql.createConnection({
	host:'mysql29.unoeuro.com',
	user:'emilfk_dk',
	password:'Falken11',
	database:'emilfk_dk_db'
});

db.connect( err => {
	if(err){
		console.log(err);
		console.log('Database error');
		process.exit();
	} else {
		db.on('error', function(err) {
			console.log('db error', err);
			if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
				global.db = mysql.createConnection({
					host:'mysql29.unoeuro.com',
					user:'emilfk_dk',
					password:'Falken11',
					database:'emilfk_dk_db'
				});                   
			} else {                                    
				throw err;                                  
			}
		});
	}
	console.log('Connected to database');
}),


module.exports = {};


