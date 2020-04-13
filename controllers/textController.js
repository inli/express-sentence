const Text = require('../models/text')

//welcome
exports.index = (req,res) => {res.send('should be a index page')}

// list texts
exports.text_list = (req, res) => { res.send('shold be text list') }

// text details
exports.text_detail = (req, res) => { res.send('should be text detail') }

// show create_text form by get
exports.text_create_get = (req, res) => { res.send('shoud be create text form by get') }

// create text by post
exports.text_create_post = (req, res) => { res.send('shoud be create text by post') }

// show delete_text form by get
exports.text_delete_get = (req, res) => { res.send('should be delete text form by get') }

// delete text by post
exports.text_delete_post = (req, res) => { res.send('should be delete text by post') }

// show update_text form by get
exports.text_update_get = (req, res) => { res.send('should be update text form by get') }

// update text by post
exports.text_update_post = (req, res) => { res.send('should be update text by post') }
