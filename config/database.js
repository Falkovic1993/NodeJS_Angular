const mysql = require('mysql');

global.db = mysql.createConnection({
    host:process.env.database_url,
    user:"root",
    password:"",
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


