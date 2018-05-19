const mysql = require('mysql');

global.db = mysql.createConnection({
    host:'emilfk.dk.mysql',
    user:"emilfk_dk",
    password:"BenEtPjhKBUWzi46TSwTamoA",
    database:"emilfk_dk"
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


