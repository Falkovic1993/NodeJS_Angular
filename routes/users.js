const express = require('express');
const router = express.Router();
const app = express();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const nodemailer = require('nodemailer');
const url = require('url');
var multer = require('multer');
const path = require('path');
var fs = require('fs');



var DIR = './uploads/';
var upload = multer({dest: DIR});

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
 
app.use(multer({
	dest: DIR,
	rename: function (fieldname, filename) {
		return filename + Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path);
	}
}));

router.post('/upload', function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			return res.end(err.toString());
		}
 
		res.end('File is uploaded');
	});
});


router.post('/getuserbyid', (req, res) => {
	//console.log('USER ID',req.headers.id)
	let userId = req.headers.id;
	User.getUserById(userId, (err, user) =>{
		//console.log('uuser',user)
		return res.json({user});
	});
});


router.post('/register', (req, res) => {
	let newUser = {
		firstname: req.fields.firstname,
		lastname: req.fields.lastname,
		password: req.fields.password,
		email: req.fields.email,
		phone: req.fields.phone,
		//image: req.fields.image,
	};
	console.log('FILES', req.files);
	

	User.addUser(newUser, (err, user) => {
		if(err){
			return res.json({success:false, msg:'Failed to register user'});
		}else{
			return res.json({success:true, msg:'User registered - See your email to vertify it! '});
		}
	});
});

router.post('/authenticate', (req, res) => {
	const email = req.fields.email;
	const password = req.fields.password;
	const googleToken = req.fields.token;
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
		id: req.fields.id,
		firstname: req.fields.firstname,
		lastname: req.fields.lastname,
		email: req.fields.email,
		password: req.fields.password,
		phone: req.fields.phone,
	};
	User.updateUser(newUser);
	return res.json({success:true, msg:'User updated!'});
});

// profile 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
	console.log(req.user);
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
		pass: 'masxaexzanwrgujf'
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
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
		to : req.fields.to,
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
				pathname:'/login',
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