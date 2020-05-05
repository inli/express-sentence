const {body,validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const Text = require('../models/text')

//welcome
exports.index = (req,res) => {
res.render('admin',{title:'admin'});
}

// list texts
exports.text_list = (req, res,next) => { 
//res.render('texts',{title:'texts'});
	Text.find({},'title content')
		.exec(function (err, list_texts){
			if(err){return next(err);}
			//successful so render
			res.render('texts',{title:'texts',text_list:list_texts});
		})

}

// text details
exports.text_detail = (req, res) => {
res.render('textDetail',{title:'text detail'});
}

// show create_text form by get
exports.text_create_get = (req, res,next) => {
res.render('textCreate',{title:'create text'});
}

// create text by post
exports.text_create_post = (req, res) => {

	body('name','Genre name required').isLength({min:1}).trim(),
	sanitizeBody('name').trim().escape(),
	(req,res,next) => {
		const errors = validationResult(req);
		var text = new Text(
		{
			title:req.body.text_title,
			content:req.body.text_content
		})
		
		if(!errors.isEmpty()){
			res.render('textForm',{title:'create text',text:text,errors:errors.array()});
			return;
		}
		else{
			//save result
		}
//res.send('shoud be create text by post') 

	}
}
// show delete_text form by get
exports.text_delete_get = (req, res) => {
res.send('should be delete text form by get') }

// delete text by post
exports.text_delete_post = (req, res) => {
res.send('should be delete text by post') }

// show update_text form by get
exports.text_update_get = (req, res) => {
res.render('textUpdate',{title:'update text'});
}
// update text by post
exports.text_update_post = (req, res) => {
res.send('should be update text by post') }
