const requireAdmin = require("../middlewares/requireAdmin")
const requireLogin = require("../middlewares/requireLogin")
const mongoose = require('mongoose');
 
const Product = mongoose.model('products');


module.exports = (app)=>{
    app.post('/api/new_product', requireLogin, requireAdmin, async (req, res)=>{
        const { name, category, price,unitType, imageurl } = req.body;
        
        const product = await new Product({
            name,
            category,
            price,
            unitType,
            imageurl,
            _user: req.user.id,
            created: Date.now() 
        }).save()

        req.user.uploadedProducts += 1; //update the current user's uploaded products
        const user = await req.user.save();
        res.send(user); // send back the updated user model to reflect the currently added product


    })

    app.get('/api/admin/products', requireLogin, requireAdmin, async (req, res)=>{
        const products = await Product.find({ _user: req.user.id}) 
        // Find all products created by the currently logged in admin
        //where the _user id property equals current user's id

        res.send(products);
    })

    app.get('/api/all_products', async(req, res)=>{
        const allProducts = await Product.find({});
        res.send(allProducts);
    })
}