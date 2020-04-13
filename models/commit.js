const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommitSchema = new Schema({
	src:{type:Schema.Types.ObjectId,ref:'Text',required:true},
	user:{type:Schema.Types.ObjectId,ref:'User',required:true},
	content:{type:String,default:''},
	update:{type:Date,default:Date.now},
	
});

CommitSchema.virtual('url').get(function(){
		return '/commit/'+this._id;
});

module.exports = mongoose.model('Commit',CommitSchema);
