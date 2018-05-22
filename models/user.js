const bcrypt = require('bcryptjs');



module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		if(err) throw err;
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			let stmt = 'INSERT INTO users SET ?';
			global.connection.query(stmt, newUser, (err, data) => {
				if(err) throw err;
				return callback(null, data);
			});
		});
	});
};

module.exports.getUserById = function(id, callback) {
	console.log('DB',id);
	let stmt = 'SELECT * FROM users WHERE id = ?';
	global.connection.query(stmt, id, (err, user) => {
		if(err){
			console.log(err);
		} else {
			console.log('user get back' , user);
			return callback(false, user);

		}
	});
};

module.exports.getUserByUserEmail = function(email, callback){
	let stmt = 'SELECT * FROM users WHERE email LIKE ?';
	global.connection.query(stmt, email, (err, user) => {
		return callback(false, user[0]);
	}); 
};

module.exports.activateUserAccount = function(mail, callback){
	let stmt = 'UPDATE users SET isActive = ? WHERE email LIKE ?';
	let data = [true, mail];
	global.connection.query(stmt, data, (err, user) => {
		//console.log('USER INFO',user);
	}); 
};

module.exports.updateUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		if(err) throw err;
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			let jUser = [newUser, newUser.id];
			let stmt = 'UPDATE users SET ? WHERE id = ?';
			global.connection.query(stmt, jUser, (err, user) => {
			//console.log(user);

			});
		});
	});
};

module.exports.comparePassword = function(TypedPassword, hash, callback){
	//console.log('typedpassword', TypedPassword)
	bcrypt.compare(TypedPassword, hash, (err, isMatch) => {
		if(err) throw err;
		return callback(null, isMatch);
	});
};

module.exports.getAllUsers = function(callback){
	let stmt = 'SELECT * FROM users';
	global.connection.query(stmt,  (err, users) => {
		//console.log(users);
		return callback(false, users);
	}); 
};

module.exports.deleteUser = function(id, callback){
	const userId = id;
	let stmt = 'DELETE FROM users WHERE id = ?';
	global.connection.query(stmt, userId, (err, data) => {
		return callback(false, data);
	});
};