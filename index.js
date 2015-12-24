var cheerio = require('cheerio'),
	request = require('request'),
	mongoose = require('mongoose'),
	express = require('express'),
	app=express()
	Channel = require('./Channel'),
	mongodbUrl="mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
	mongoose.connect(mongodbUrl);
	var db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error'));
var DEFAULT_URL = "http://dev.bestrussiantv.com/internet-tv-online.aspx";
app.get('/scrape',function(req,res){
	request(DEFAULT_URL,function(err,response,html){
		if(!err){
			var $ = cheerio.load(html);
			$('#tv-guide table tr .chName').each(function(){
				var data = $(this);
				var channelName = data.text();
				var channel = new Channel({
					name: channelName
				});
				channel.save(function(err,channel){
					if(err)
						throw err;
					else
						console.dir(channel);
				});
			})
		}
	})
	res.send("Console for output");

});
app.listen('8080')
exports=module.exports = app;