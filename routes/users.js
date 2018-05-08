const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');



router.post('/hello', (req, res) => {
	User.getUserById(1);
});

router.post('/register', (req, res, next) => {
	let newUser = {
		name: req.body.firstname,
		email: req.body.email,
		username: req.body.lastname,
		password: req.body.password,
	};
	User.addUser(newUser, (err, user) => {
		if(err){
			return	res.json({success:false, msg:'Failed to register user'});
		}else{
			return res.json({success:true, msg:'User registered'});
		}
	});
});

router.post('/authenticate', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByUserEmail(email, (err, user) => {
		if(err) throw err;
		if(!user){
			return res.json({success:false, msg:'User not found'});
		}
		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){      
				const token = jwt.sign({data:user}, 'mySecret', {expiresIn: 604800});
				res.json({
					success:true,
					msg:'You are now logged in',
					token: 'Bearer ' + token, 
					user:{
						id: user.id,
						name: user.name,
						lastname: user.username,
						email: user.email
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
		name: req.body.firstname,
		email: req.body.email,
		username: req.body.lastname,
		password: req.body.password,
	};
	console.log(newUser);
	User.updateUser(newUser);
	return res.json({success:true, msg:'User updated!'});
});

// profile 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
	res.json({user: req.user });
});



module.exports = router;