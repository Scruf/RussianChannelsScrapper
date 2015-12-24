var express = require('express'),
	cherio = require('cheerio'),
	mongoose = require('mongoose'),
	request = require('request'),
	app = express(),
	mongoUrl = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies",
	DEFAULT_URL = "http://dev.bestrussiantv.com/russian-movies-online.html";
mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));



app.get('/scrape',function(req,res){
	request(DEFAULT_URL,function(err,response,html){
		if(!err){
			var $ = cheerio.load(html);
			$()
		}else
			throw err;
	})
});

app.listen('8080');
exports=module.exports=app;