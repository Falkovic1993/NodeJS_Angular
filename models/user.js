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
               // console.log(newUser.email)
                mail.sendmail(newUser.email)
            })
        })
    })
}

module.exports.getUserById = function(id, callback) {
    let stmt = 'SELECT * FROM USERS WHERE id LIKE ?'
    global.db.query(stmt, id, (err, user) => {
        return callback(false, user)
    })
}

module.exports.getUserByUsername = function(username, callback){
    let stmt = 'SELECT * FROM users WHERE username LIKE ?';
    global.db.query(stmt, username, (err, user) => {
        return callback(false, user[0])
    })
    
}

module.exports.comparePassword = function(TypedPassword, hash, callback){
    bcrypt.compare(TypedPassword, hash, (err, isMatch) => {
        if(err) throw err;
        console.log(isMatch)
        return callback(null, isMatch);
    })
}

