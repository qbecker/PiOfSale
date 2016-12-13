var express = require('express');
var router = express.Router();
var myParser = require("body-parser");
var org = require('../config/organizationConfig');
var addProduct = require('../model/addProduct');
var getProduct = require('../model/getProductList');
var getOne = require("../model/getProduct");
var update = require('../model/updateProduct');
var remove = require('../model/removeProduct');


/* GET editProducts page. */
router.get('/', function(req, res, next) {
  res.render('EditProducts.jade', {organization: org.organization});
});

router.post('/add', function(req, res){
    console.log("MATCH ADD PRODUCT");
    console.log(req.body);
    addProduct.checkDB(req.body, function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    });
});

router.get('/list', function(req, res){
    console.log("MATCH GET PRODUCT LIST");
    getProduct.getProductList(org.organization, function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    });
});

router.get('/one/:productName', function(req, res){
    console.log("MATCH GET ONE PRODUCT INFO");
    console.log(req.params.productName);
    getOne.getProduct(req.params.productName, function(response){
        console.log(response);
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    });
});


router.post('/update', function(req, res){
    console.log("MATCHED POST PRODUCT UPDATE");
    console.log(req.body);
    update.updateProduct(req.body, function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    });
    
});

router.post('/remove', function(req, res){
    console.log("MATCHED POST PRODUCT REMOVE");
    console.log(req.body);
    remove.removeProduct(req.body, function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    });
});

module.exports = router;
