var productList = require('../model/productListModel');
var org = require('../config/organizationConfig.js');

var test = require('../model/getProductList.js');
//Check if ProductList already exists, if not, call function to create it. else add the
//product to orgs product List
function checkDB(newProduct, callback){
    productList.findOne({Organization: org.organization}, function(err, productList){
        if(err){
            console.log(err);
        }else if(productList){
            console.log(newProduct);
            productList.Products.push(newProduct);
            productList.save(function(err){
                if(err){
                    console.log(err);
                    callback({"Accepted": "N"});
                }else{
                    callback({"Accepted": "Y"});
                    
                }
                test.getProductList();
            });
        }else{
            //create product List
            createProductList(org.organization, function(answer){
                callback(answer);
            });
        }
    });
}

function createProductList(organization, callback){
    var newProductList = new productList({Organization: organization, Products: []});
    newProductList.save(function(err, productList){
        if(err){
            console.log(err);
            callback({"Accepted": "N"});
        }else{
            console.log("New productList added" + organization);
            callback({"Accepted": "Y"});
        }
    });
}


module.exports.checkDB = checkDB;