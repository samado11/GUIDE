var express = require('express');
var router = express.Router();
const config = require('config');
var service = require('../controllers/ServicesController');
var upload = require('../multer');

// User Model
const User_services = require('../models/users_services');

router.get('/showservices', service.showservices);

router.post('/addservices', upload.fields([{name:'pdf',maxCount:1},{name:'image',maxCount:1}]), service.addservices);


module.exports = router;
