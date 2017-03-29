var express = require('express');
var expertRouter = express.Router();
var thresholdController = require('../controllers/expert/thresholdController');
var stockingdetailController = require('../controllers/expert/stockingdetailController');
var trackeraugumentedController = require('../controllers/expert/trackeraugumentedController');
expertRouter.use('/nguong',thresholdController);
expertRouter.use('/nhatky',stockingdetailController);
expertRouter.use('/theodoitangtruong',trackeraugumentedController);
module.exports = expertRouter;