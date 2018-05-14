const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const nodemailer = require('nodemailer');
const url = require('url');   

//const formidable = require('express-formidable');
//router.use(formidable());


router.post('/getuserbyid', (req, res) => {
	
	let userId = req.headers.id;
	User.getUserById(userId, (err, user) =>{
		return res.json({user});
	});
});


router.post('/register', (req, res) => {
	
	console.log('REQ',req);
	console.log('FILES',req.files);
	let newUser = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		password: req.body.password,
		email: req.body.email,
		phone: req.body.phone,
		
	};
	//console.log(req.body)
	User.addUser(newUser, (err, user) => {
		if(err){
			return	res.json({success:false, msg:'Failed to register user'});
		}else{
			return res.json({success:true, msg:'User registered - See your email to vertify it! '});
		}
	});
});

router.post('/authenticate', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const googleToken = req.body.token
	console.log(email);

	User.getUserByUserEmail(email, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success:false, msg:'User not found'});
		}
		if(user.isActive == 0){
			return res.json({success:false, msg:'You have not vertified your account yet!'});
		}
		if(googleToken) {
			const token = jwt.sign({data:user}, 'mySecret', {expiresIn: 604800});
			return res.json({
				success:true,
				msg:'You are now logged in',
				token: 'Bearer ' + token, 
				user:{
					id: user.id,
					firstname: user.firstname,
					lastname: user.lastname,
					email: user.email,
					phone: user.phone
				}
			});
		}
		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){      
				const token = jwt.sign({data:user}, 'mySecret', {expiresIn: 604800});
				return res.json({
					success:true,
					msg:'You are now logged in',
					token: 'Bearer ' + token, 
					user:{
						id: user.id,
						firstname: user.firstname,
						lastname: user.lastname,
						email: user.email,
						phone: user.phone
					}
				});
			} else {
				return res.json({success:false, msg:'Wrong password'});
			}
		});
	});
});

router.post('/updateUser', ( req , res ) => {
	let newUser = {
		id: req.body.id,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone,
	};
	User.updateUser(newUser);
	return res.json({success:true, msg:'User updated!'});
});

// profile 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
	return res.json({user: req.user });
});

router.get('/getAllUsers', (req, res) => {
	User.getAllUsers( (err, users) => {
		return res.json({users: users});
	});
});

router.post('/deleteUser', (req, res) => {
	const userid = req.headers.id;
	User.deleteUser(userid, (err, data) => {
		return res.json({data});
	});
});





var smtpTransport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: 'emilfalkknudsen93@gmail.com',
		pass: 'T745cmGHfv1B'
	},
	tls:{
		rejectUnauthorized:false
	}
});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/


router.post('/send', function(req,res){

	rand = Math.floor((Math.random() * 100) + 54);
	host = req.get('host');
	link = 'http://'+req.get('host')+'/users/verify?id='+rand;

	mailOptions={
		to : req.body.to,
		subject : 'Please confirm your Email account',
		html : 'Hello,<br> Please Click on the link to verify your email.<br><a href='+link+'>Click here to verify</a>' 
	};
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
	 if(error){
			console.log(error);
			return res.end('error');
	 }else{
			console.log('Message sent: ' + response.message);
			return	res.end('sent');
	 }
	});
});

router.get('/verify', function(req,res){
	console.log(req.protocol+':/'+req.get('host'));
	if((req.protocol+'://'+req.get('host'))==('http://'+host))
	{
		console.log('Domain is matched. Information is from Authentic email');
		if(req.query.id==rand)
		{
			User.activateUserAccount(mailOptions.to);
			console.log('email is verified');
			//res.end('<h1>Email '+mailOptions.to+' is been Successfully verified');
			return res.redirect(url.format({
				pathname:'http://localhost:4200/login',
			}));
		}
		else
		{
			console.log('email is not verified');
			return res.end('<h1>Bad Request</h1>');
		}
	}
	else
	{
		return res.end('<h1>Request is from unknown source');
	}
});



module.exports = router;