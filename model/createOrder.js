var order = require('../model/orderModel');
var org = require('../config/organizationConfig.js');

function createOrder(organization, callback){
    var n = Date.now();
    var newOrder = new order({Organization: org.organization, DateCreated: n, Products: [], Type: "", Price: ""});
    newOrder.save(function(err, order){
        if(err){
            console.log(err);
            callback({"Accepted": "N"});
        }else{
            console.log("New order added" + order);
            callback({"Accepted": "Y"});
        }
    });
}


module.exports.createOrder = createOrder;