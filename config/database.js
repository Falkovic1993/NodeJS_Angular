const mysql = require('mysql');

global.db = mysql.createConnection({
    host:'us-cdbr-iron-east-04.cleardb.net',
    user:"b09cb87df8ff2a",
    password:"61e9557f",
    database:"Nodejs_exam"
})

//mysql://b09cb87df8ff2a:61e9557f@us-cdbr-iron-east-04.cleardb.net/heroku_4d5dd86fbee2f56?reconnect=true
db.connect( err => {
    if(err){
        console.log('Database error')
        process.exit();
    }
    console.log('Connected to database')
})

module.exports = {};


