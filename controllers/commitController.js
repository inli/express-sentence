const Commit = require('../models/commit');

//show commit list
exports.commit_list = (req,res) => {
	Commit.find({},'src user content update')
		.populate('src user')
		.exec(function (err, list_commits){
			if(err){return next(err);}
			//successful so render
			res.render('commits',{title:'commits',commit_list:list_commits});

		});
}
//show commit list
exports.commit_detail = (req,res) => {
res.render('commitDetail',{title:'commit detail'});
//res.send('should be a commit detail')
}
//show commit_create form by get
exports.commit_create_get = (req,res) => {
res.render('commitCreate',{title:'create commit'});
//res.send('should be a commit create form ')
}

exports.commit_create_post = (req,res) => {res.send('should be  create commit')}

exports.commit_delete_get = (req,res) => {res.send('should be a commit_delete form')}

exports.commit_delete_post = (req,res) => {res.send('should be a commit delete')}

exports.commit_update_get = (req,res) => {
res.render('commitUpdate',{title:'update commit'});
//res.send('should be commit update form')
}
exports.commit_update_post = (req,res) => {res.send('should be commit update')}
