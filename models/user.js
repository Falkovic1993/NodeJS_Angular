const bcrypt = require('bcryptjs');
const mail = require('./nodemailer');



module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		if(err) throw err;
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			let stmt = 'INSERT INTO users SET ?';
			global.db.query(stmt, newUser, (err, data) => {
				// console.log(data);
				if(err) throw err;
				mail.sendmail(newUser.email);
				return callback();
              
			});
		});
	});
};

module.exports.getUserById = function(id, callback) {
	let stmt = 'SELECT * FROM USERS WHERE id LIKE ?';
	global.db.query(stmt, id, (err, user) => {
		return callback(false, user);
	});
};

module.exports.getUserByUserEmail = function(email, callback){
	let stmt = 'SELECT * FROM users WHERE email LIKE ?';
	global.db.query(stmt, email, (err, user) => {
		return callback(false, user[0]);
	}); 
};

module.exports.updateUser = function(newUser){
	let jUser = [newUser, newUser.id];
	let stmt = 'UPDATE users SET ? WHERE id = ?';
	global.db.query(stmt, jUser, (err, user) => {
		console.log(user);
	});
};

module.exports.comparePassword = function(TypedPassword, hash, callback){
	console.log('typedpassword', TypedPassword)
	bcrypt.compare(TypedPassword, hash, (err, isMatch) => {
		if(err) throw err;
		return callback(null, isMatch);
	});
};

