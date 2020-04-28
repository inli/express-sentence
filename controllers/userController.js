const User = require('../models/user');

//show user list
exports.user_list = (req,res) => {
res.render('users',{title:'user list'});
}

//show user_create form by get
exports.user_create_get = (req,res) => {
res.render('userCreate',{title:'create user'});
//res.send('should be a user create form ')
}

exports.user_create_post = (req,res) => {res.send('should be  create user')}

exports.user_delete_get = (req,res) => {res.send('should be a user_delete form')}

exports.user_delete_post = (req,res) => {res.send('should be a user delete')}

exports.user_update_get = (req,res) => {
res.render('userUpdate',{title:'update user info'});
//res.send('should be user update form')
}

exports.user_update_post = (req,res) => {res.send('should be user update')}
