cheerio = require 'cheerio'
request = require 'request'
mongoose = require 'mongoose'
express = require 'express'
app = express()
Channel = require './Channel'
mongodbUrl = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies"
mongoose.connect(mongodbUrl)
db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'))
DEFAULT_URL = "http://dev.bestrussiantv.com/internet-tv-online.aspx"
app.get '/scrape', (err,response,html)->
	request 'DEFAULT_URL', (err,response,html)->
		if err
			throw err
		else
			$ = cheerio.load 'html'
			$('#tv-guide table tr .chName').each(()->
				data = $ 'this'
				channelName = data.text()
				channel = new Channel({
					name: channelName
				})
				channel.save((err,channel)->
					if err
						throw err
					else
						console.dir 'channel')
				)
	response.send 'Console for output'
app.listen '8080'
exports = module.exports = app