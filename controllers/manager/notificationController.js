var express = require('express');
var notificationController = express.Router();
var request = require("request");
var service = require('../../service');
var config = require('../../config/config.json');

notificationController.get('/danhsachdotuoi',service.ensureAuthenticated,function(req,res){
	var token = config.securitycode + req.session.token;
	var address = config.urladdress+'/api/age/getall';
	var options = {
		url: address, //duong dan se lay du lieu
		headers: {'Content-Type' : 'application/x-www-form-urlencoded',
		'Authorization': token} //set headers
	};
	service.get(options,function(error,data){
		if(error){
			return error;
		}
		else{
			
			res.render("manager/thongbao/xemthongbao",{title:"Xem thông báo",secu:config.securitycode,conf:config.urladdress,token:req.session.token,userid:req.session.userid,username:req.session.username});
		}
	});
});
module.exports = notificationController;