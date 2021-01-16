const requireLogin = require("../middlewares/requireLogin")
const mongoose = require('mongoose');
const requireAdmin = require("../middlewares/requireAdmin");

const Order = mongoose.model('orders');

module.exports = (app)=>{

    app.post('/api/new_order', requireLogin, async(req, res)=>{
       const { cartItems, total, mobileNumber } = req.body;

       const order = new Order({
         transactionId: 'TRANSACTIONID',
         amount: total,
         products: cartItems,
         created: Date.now(),
         contact: mobileNumber,
         _user: req.user.id


       });

       try{
         //Process MPESA transaction, if successful, proceed  
        await order.save();
        req.user.ordersMade +=1;
        const user = await req.user.save();
        res.send(user);  

       }catch(err){
           res.status(422).send(err); // 422 means Something is wrong with the MPESA center, like network issues

       }

       
    })

    app.get('/api/admin/all_orders', requireLogin, requireAdmin, async (req, res)=>{
        const allOrders = await Order.find({});
        res.send(allOrders); 
        
    })
        

    app.get('/api/orders', requireLogin, async (req, res)=>{
        const orders = await Order.find({ _user: req.user.id})
        // Find all orders created by the currently logged in user
        //where the _user id property equals current user's id

        res.send(orders);
    });
    



}