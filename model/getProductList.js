var productList = require('../model/productListModel');
var org = require('../config/organizationConfig.js');


function getProductList(org, callback){
    productList.findOne({Organization: org}, function(err, productList){
        if(err){
            console.log(err);
        }else if(productList){
            console.log(productList);
            callback(productList);
        }
    });
}

module.exports.getProductList = getProductList;