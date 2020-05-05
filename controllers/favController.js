const Commit = require('../models/commit');

//show fav list
exports.fav_list = (req,res) => {
res.render('favs',{title:'fav list'});
//res.send('should be a fav list')
}

//show fav list
exports.fav_detail = (req,res) => {
res.render('favDetail',{title:'fav detail'});
//res.send('should be a fav detail')
}
//show fav_create form by get
exports.fav_create_get = (req,res) => {
res.render('favCreate',{title:'create fav'});
//res.send('should be a fav create form ')
}

exports.fav_create_post = (req,res) => {res.send('should be  create fav')}

exports.fav_delete_get = (req,res) => {res.send('should be a fav_delete form')}

exports.fav_delete_post = (req,res) => {res.send('should be a fav delete')}

exports.fav_update_get = (req,res) => {
res.render('favUpdate',{title:'update fav'});
//res.send('should be fav update form')
}
exports.fav_update_post = (req,res) => {res.send('should be fav update')}
