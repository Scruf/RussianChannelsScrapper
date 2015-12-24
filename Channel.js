var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var channelSchema  = new Schema({
	name:String
	
});
var Channel = mongoose.model('RokuChannels',channelSchema);
module.exports=Channel;