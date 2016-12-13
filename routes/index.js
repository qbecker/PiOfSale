var express = require('express');
var router = express.Router();
var path = require('path');
var org = require('../config/organizationConfig.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing.jade', {organization: org.organization} );
});

module.exports = router;
