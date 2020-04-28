const express = require('express');
const router = express.Router();

const text_controller = require('../controllers/textController');
const user_controller = require('../controllers/userController');
const commit_controller = require('../controllers/commitController');

// get index
router.get('/',text_controller.index);

router.get('/texts',text_controller.text_list);


router.get('/text/create',text_controller.text_create_get);
router.post('/text/create',text_controller.text_create_post);

router.get('/text/:id/detail',text_controller.text_detail);
router.get('/text/:id/delete',text_controller.text_delete_get);
router.post('/text/:id/delete',text_controller.text_delete_post);

router.get('/text/:id/update',text_controller.text_update_get);
router.post('/text/:id/update',text_controller.text_update_post);

//user
router.get('/users',user_controller.user_list);
router.get('/user/create',user_controller.user_create_get);
router.post('/user/create',user_controller.user_create_post);
router.get('/user/:id/delete',user_controller.user_delete_get);
router.post('/user/:id/delete',user_controller.user_delete_post);
router.get('/user/:id/update',user_controller.user_update_get);
router.post('/user/:id/update',user_controller.user_update_post);

//commit
router.get('/commits',commit_controller.commit_list);
router.get('/commit/:id/detail',commit_controller.commit_detail);
router.get('/commit/create',commit_controller.commit_create_get);
router.post('/commit/create',commit_controller.commit_create_post);
router.get('/commit/:id/delete',commit_controller.commit_delete_get);
router.post('/commit/:id/delete',commit_controller.commit_delete_post);
router.get('/commit/:id/update',commit_controller.commit_update_get);
router.post('/commit/:id/update',commit_controller.commit_update_post);

module.exports = router;
