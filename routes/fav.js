const express = require('express');
const router = express.Router();

const fav_controller = require('../controllers/favController');

//fav
router.get('/',fav_controller.fav_list);
router.get('/:id/detail',fav_controller.fav_detail);
router.get('/create',fav_controller.fav_create_get);
router.post('/create',fav_controller.fav_create_post);
router.get('/:id/delete',fav_controller.fav_delete_get);
router.post('/:id/delete',fav_controller.fav_delete_post);
router.get('/:id/update',fav_controller.fav_update_get);
router.post('/:id/update',fav_controller.fav_update_post);

module.exports = router;
