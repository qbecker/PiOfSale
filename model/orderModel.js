var db = require('../config/dataBase');


//model for orders made
var order = db.model('Order',{Organization: String, DateCreated: String, Products: Array, OrderNumber: String, Type: String, Price: String});

module.order = order;