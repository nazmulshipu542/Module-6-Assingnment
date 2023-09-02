const express =require('express');
const router = express.Router();

//blogController
const blogController = require('../Controllers/blogController');
router.get('/blog', blogController.blog);
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

//blogDetailsController
const blogDetailsController = require('../Controllers/blogDetailsController');
router.get('/blogDetails', blogDetailsController.blogDetails);
router.get('/blogDetails/create', blogDetailsController.create);
router.get('/blogDetails/read', blogDetailsController.read);
router.get('/blogDetails/delete', blogDetailsController.delete);
router.get('/blogDetails/update', blogDetailsController.update);

//commentController
const commentController = require('../Controllers/commentController');
router.get('/comment', commentController.comment);
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete);
router.get('/comment/update', commentController.update);

//messageController
const messageController = require('../Controllers/messageController');
router.get('/message', messageController.message);
router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/delete', messageController.delete);
router.get('/message/update', messageController.update);

//portfolioController
const portfolioController = require('../Controllers/portfolioController');
router.get('/portfolio', portfolioController.portfolio);
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete);
router.get('/portfolio/update', portfolioController.update);

//productController
const productController = require('../Controllers/productController');
router.get('/product', productController.product);
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete);
router.get('/product/update', productController.update);

//profitController
const profitController = require('../Controllers/profitController');
router.get('/profit', profitController.profit);
router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/delete', profitController.delete);
router.get('/profit/update', profitController.update);

//projectController
const projectController = require('../Controllers/projectController');
router.get('/project', projectController.project);
router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/delete', projectController.delete);
router.get('/project/update', projectController.update);

//serviceController
const serviceController = require('../Controllers/serviceController');
router.get('/service', serviceController.service);
router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/delete', serviceController.delete);
router.get('/service/update', serviceController.update);

//titleController
const titleController = require('../Controllers/titleController');
router.get('/title', titleController.title);
router.get('/title/create', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/delete', titleController.delete);
router.get('/title/update', titleController.update);

module.exports = router;