// Generated by CoffeeScript 1.10.0
(function() {
  var Channel, DEFAULT_URL, app, cheerio, db, exports, mongodbUrl, mongoose, request;

  cheerio = require('cheerio');

  request = require('request');

  mongoose = require('mongoose');

  express = require('express');

  app = express();

  Channel = require('./Channel');

  mongodbUrl = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";

  mongoose.connect(mongodbUrl);

  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));

  DEFAULT_URL = "http://dev.bestrussiantv.com/internet-tv-online.aspx";

  app.get('/scrape', function(err, response, html) {
    request('DEFAULT_URL', function(err, response, html) {
      var $;
      if (err) {
        throw err;
      } else {
        $ = cheerio.load('html');
        return $('#tv-guide table tr .chName').each(function() {
          var channel, channelName, data;
          data = $('this');
          channelName = data.text();
          channel = new Channel({
            name: channelName
          });
          return channel.save(function(err, channel) {
            if (err) {
              throw err;
            } else {
              return console.dir('channel');
            }
          });
        });
      }
    });
    return response.send('Console for output');
  });

  app.listen('8080');

  exports = module.exports = app;

}).call(this);
