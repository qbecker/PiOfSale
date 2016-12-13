var productList = require('../model/productListModel');
var org = require('../config/organizationConfig.js');


function removeProduct(product, callback){
    productList.findOne({Organization: org.organization}, function(err, productList){
        var accepted = {"Accepted": "NO"};
        var productName = product.Name;
        if(err){
            console.log(err);
            callback(accepted);
        }else if(productList){
            console.log(productList);
            for(var i = 0; i < productList.Products.length; i++){
               if(productList.Products[i].Name == productName){
                   productList.Products.splice(i, 1);
               }                 
            }
            productList.save(function(err){
                if(err){
                    console.log(err);
                }else{
                    accepted = {"Accepted": "YES"};
                }
            });
            callback(accepted);
        }
    });
}

module.exports.removeProduct = removeProduct;