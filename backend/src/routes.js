const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostConroller = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostConroller.index);
routes.post('/posts', upload.single('image'), PostConroller.store);


routes.post('/posts/:id/like',LikeController.store);

module.exports = routes;