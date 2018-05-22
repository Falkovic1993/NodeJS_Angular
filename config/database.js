const mysql = require('mysql');

/*

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

*/

const db_config = {
	host:'mysql29.unoeuro.com',
	user:'emilfk_dk',
	password:'Falken11',
	database:'emilfk_dk_db'
};



let connection;

function handleDisconnect() {
	global.connection = mysql.createConnection(db_config); // Recreate the connection, since
	// the old one cannot be reused.

	connection.connect(function(err) {              // The server is either down
		if(err) {                                     // or restarting (takes a while sometimes).
			console.log('error when connecting to db:', err);
			setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
		}                                     // to avoid a hot loop, and to allow our node script to
	});                                     // process asynchronous requests in the meantime.
	// If you're also serving http, display a 503 error.
	connection.on('error', function(err) {
		console.log('db error', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
			handleDisconnect();                         // lost due to either server restart, or a
		} else {                                      // connnection idle timeout (the wait_timeout
			throw err;                                  // server variable configures this)
		}
	});
}

handleDisconnect();

module.exports = {};


