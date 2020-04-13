const Commit = require('../models/commit');

//show commit list
exports.commit_list = (req,res) => {res.send('should be a commit list')}

//show commit list
exports.commit_detail = (req,res) => {res.send('should be a commit detail')}

//show commit_create form by get
exports.commit_create_get = (req,res) => {res.send('should be a commit create form ')}

exports.commit_create_post = (req,res) => {res.send('should be  create commit')}

exports.commit_delete_get = (req,res) => {res.send('should be a commit_delete form')}

exports.commit_delete_post = (req,res) => {res.send('should be a commit delete')}

exports.commit_update_get = (req,res) => {res.send('should be commit update form')}

exports.commit_update_post = (req,res) => {res.send('should be commit update')}
