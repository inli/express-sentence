const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TextSchema = new Schema(
	{
		title:{type:String,required:true,max:100},
		content:{type:String,required:true},
		update:{type:Date,default:Date.now},
		src:{type:String,default:'佚名'},
		labels:[String],

	});

//virtual type
TextSchema.virtual('url')
	.get(function(){
		return '/text/'+this._id;
	});




module.exports = mongoose.model('Text',TextSchema);


