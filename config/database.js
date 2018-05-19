const mysql = require('mysql');

global.db = mysql.createConnection({
    host:'mysql://b09cb87df8ff2a:61e9557f@us-cdbr-iron-east-04.cleardb.net/heroku_4d5dd86fbee2f56?reconnect=true',
    user:"b49fd81ad844de",
    password:"a30212fd",
    database:"Nodejs_exam"
})

db.connect( err => {
    if(err){
        console.log('Database error')
        process.exit();
    }
    console.log('Connected to database')
})

module.exports = {};


