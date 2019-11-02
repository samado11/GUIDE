var express = require('express');
var router = express.Router();
const config = require('config');

var upload = require('../multer');
var user = require('../controllers/UserController');
// User Model
const User = require('../models/User');

router.post('/bulk', upload.array('profiles', 10) ,user.bulk);



module.exports = router;
