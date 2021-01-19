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
        const lastEight = mobileNumber.substr(mobileNumber.length - 8); // We're getting the last 8 digits
        const refinedNumber = '2547'+ lastEight;

        let datenow = new Date();        
             
        const year = datenow.getFullYear().toString();
        let addedmonth = datenow.getMonth()+1 //months starts from 0 in Javascript
        const stringmonth = (addedmonth < 10 ? '0' : '') + (addedmonth.toString()); 
        // Since months in Javascript are in array form, so January is returned as 0, and we add 0 as a string
        //before it incase the current month is less than 10.
        // If the current month+ 1 is more than 10, we add empty string ''.
        // We then append the string value of the month +1         
        
        const day = datenow.getDate().toString();
        const hours = datenow.getHours().toString();
        const minutes = datenow.getMinutes().toString();
        const seconds = datenow.getSeconds().toString()

        const timestamp = year + stringmonth + day + hours + minutes + seconds;                 
        
        console.log("Timestamp", timestamp);
        let valid = (new Date(timestamp)).getTime() > 0;
        console.log(valid)
        const password = new Buffer.from("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp).toString('base64')
        
        console.log("Password", password)
        

        //    new Date().getTime()

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