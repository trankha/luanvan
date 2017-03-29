var express = require('express');
var expertRouter = express.Router();
var thresholdController = require('../controllers/expert/thresholdController');
var adviceController = require('../controllers/expert/adviceController');
var stockingdetailController = require('../controllers/expert/stockingdetailController');
var trackeraugumentedController = require('../controllers/expert/trackeraugumentedController');
expertRouter.use('/nguong',thresholdController);
expertRouter.use('/loikhuyen',adviceController);
expertRouter.use('/nhatky',stockingdetailController);
expertRouter.use('/theodoitangtruong',trackeraugumentedController);
module.exports = expertRouter;