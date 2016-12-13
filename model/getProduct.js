var productList = require('../model/productListModel');
var org = require('../config/organizationConfig.js');


function getProduct(productName, callback){
    productList.findOne({Organization: org.organization}, function(err, productList){
        console.log(productName);
        if(err){
            console.log(err);
        }else if(productList){
            var found = {"Accepted": "NO"};
            for(var i  = 0; i < productList.Products.length; i++){
                if(productList.Products[i].Name == productName){
                    found = productList.Products[i];
                }
            }
            callback(found);
        }
    });
}

module.exports.getProduct = getProduct;