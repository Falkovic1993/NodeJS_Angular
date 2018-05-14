const express = require('express');
const router = express.Router();
const Messages = require('../models/messages');




router.post('/savemessages', (req, res) => {
	console.log('SAVE MESSAGE *********',req)
	let userid = req.body.data.userId;
	let firstname = req.body.data.firstname;
	console.log(firstname);
	let message = req.body.data.messages;
	let date = req.body.data.date;
	Messages.saveMessage(userid, firstname , message, date);
	return res.json({msg:'Wow'});
});

router.get('/getallmessages', ( req, res ) => {
	Messages.getAllMessages(  (err, messages) => {
		res.json({messages:messages});
	});
});

module.exports = router;
