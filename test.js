// add test examples
// use db path as args (as:bookdb 'mongodb://....'

//get args
const userArgs = process.argv.slice(2);
console.log('userargs:',userArgs[0]);
if(!userArgs[0].startsWith('mongodb://')){
	console.log('error,need a legal url as thr first arg');
	return;
}

const async = require('async');
const Text          = require('./models/text');
const User        = require('./models/user');
const Commit         = require('./models/commit');


const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error',console.error.bind(console,'mongodb connection failed'));

const texts = [];
const users = [];
const commits = [];

function textCreate(title,content,src,labels,cb){
	const text = new Text({
		title:title,
		content:content,
		src:(src!==false)?src:'unknown',
		labels:labels
	});

	text.save( err=>{
		if(err){
			cb(err,null);
			return;
		}
		console.log('new text:'+text);
		texts.push(text);
		cb(null,text);
	});
}

function userCreate(userid,cb){
	const user = new User({userid:userid,password:'123456'});
	user.save(err=>{
		if(err){
			cb(err,null);
			return;
		}
		console.log('new user:',user);
		users.push(user);
		cb(null,user);
	});
}

function commitCreate(src,user,content,cb){
	const commit = new Commit({
		src:src,
		user:user,
		content:content
	});

	commit.save(err=>{
		if(err){
			cb(err,null);
			return;
		}
		console.log('new commit:'+commit);
		commits.push(commit);
		cb(null,commit);
	});

}

function createTexts(cb){
	async.parallel([
		callback=> textCreate('texttitle1','content1',false,['a'],callback),
		callback=> textCreate('texttitle1','content1',false,['a'],callback),
		callback=> textCreate('texttitle1','content1',false,['a'],callback)
	],cb);
}

function createUsers(cb){
	async.parallel([
		callback=>userCreate('id1',callback),
		
		callback=>userCreate('id2',callback),
		
		callback=>userCreate('id3',callback),
		
		callback=>userCreate('id4',callback)],cb);
}

function createCommits(cb){
	async.parallel([
		callback=>commitCreate(texts[0],users[0],'content1',callback),
		callback=>commitCreate(texts[1],users[1],'content1',callback),
		callback=>commitCreate(texts[2],users[2],'content1',callback)
	],cb);
}

async.series(
	[
		createTexts,
		createUsers,
		createCommits
	],
	(err,results) => {
		console.log(
			err ?
			'final error:' + err:
			'commit'+commits);
	db.close();
	});
	
		
		
		
