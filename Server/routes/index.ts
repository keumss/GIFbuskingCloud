"use strict";
var db = require('./db.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

	var info = JSON.parse(req.headers.authoraization);
	var sending_obj = {};
	var isUser = false;


	console.log(info.ID);
	console.log(info.Password);

	for(var i=0; i<db.length; i++){
		if(info.ID==db[i].ID){
			isUser = true;
			break;
		}
	}

	if(isUser){
		sending_obj = db[i];	
	}else{
		db.push[{
			ID: info.ID,
			Password: info.ID,
			user_coin: 0,
			busker_coin: 0,
			busker_heart: 0
		}];
		sending_obj = db[db.length-1];
	}
	console.log(sending_obj.ID);

 	res.send(JSON.stringify(sending_obj));
});

module.exports = router;
