

module.exports.saveMessage = function(userId, firstname, messages, date){
	let newMessageData = {userId, firstname, messages, date};
	console.log(newMessageData);
	let stmt = 'INSERT INTO messages SET ?';
	global.db.query(stmt, newMessageData, (err, data) => {
		if(err) {
			console.log(err);
		}
	});
};

module.exports.getAllMessages = function(callback){
	let stmt = 'SELECT * FROM messages';
	global.db.query(stmt,  (err, messages) => {
		//console.log(users);
		return callback(false, messages);
	});
};