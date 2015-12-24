var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

videotekaScheam = new Schema({
	directory_name:String,
	subdirectory_name: [String],
	subdirectory_counts: [Number],
	subdirectory_urls: [String]
});
var Channel = mongoose.model("Vidioteka",videotekaScheam);
module.exports = Channel;
