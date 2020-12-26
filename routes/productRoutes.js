const requireAdmin = require("../middlewares/requireAdmin")
const requireLogin = require("../middlewares/requireLogin")
const mongoose = require('mongoose');
 
const Product = mongoose.model('products');


module.exports = (app)=>{
    app.post('/api/new_product', requireLogin, requireAdmin, (req, res)=>{
        const { name, category, price,unitType, imageUrl } = req.body;
        
        const product =  new Product({
            name,
            category,
            price,
            unitType,
            imageUrl,
            _user: req.user.id,
            created: Date.now()
        }).save()
    })
}