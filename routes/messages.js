const express = require('express');
const router = express.Router();
const Messages = require('../models/messages');




router.post('/savemessages', (req, res) => {
	console.log('SAVE MESSAGE *********',req)
	let userid = req.fields.data.userId;
	let firstname = req.fields.data.firstname;
	console.log(firstname);
	let message = req.fields.data.messages;
	let date = req.fields.data.date;
	Messages.saveMessage(userid, firstname , message, date);
	return res.json({msg:'Wow'});
});

router.get('/getallmessages', ( req, res ) => {
	Messages.getAllMessages(  (err, messages) => {
		res.json({messages:messages});
	});
});

module.exports = router;
