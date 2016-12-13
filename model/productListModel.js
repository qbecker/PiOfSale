var db = require('../config/dataBase');


//model for products that are caried.
var productList = db.model('ProductList',{Organization: String, Products: Array});



module.exports = productList;