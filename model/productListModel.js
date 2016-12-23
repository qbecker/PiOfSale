var db = require('../config/dataBase');


//model for products that are caried.
var productList = db.model('ProductList',{Organization: String, Products: Array});

//var order = db.model('Order',{Organization: String, Products: Array, OrderNumber: String, Type: String, Price: String});

module.exports = productList;