const requireLogin = require("../middlewares/requireLogin");
const mongoose = require('mongoose');
const requireAdmin = require("../middlewares/requireAdmin");
const getMpesaOauthToken = require("../middlewares/getMpesaOauthToken");
// const request = require('request');
const requestForPaymentToMpesa = require("../middlewares/requestForPaymentToMpesa");


const Order = mongoose.model('orders');
const User = mongoose.model('users');


module.exports = (app)=>{

    app.post('/api/stk_callback', async (req, res)=>{        

        await User.updateOne({ 
                                phoneNumber: req.body.Body.stkCallback.CallbackMetadata.Item[3].Value.toString() 
                            },
                            {
                                $inc : { ordersMade: 1}
                            }

            
        ).exec();            

        const user = await User.findOne({phoneNumber: req.body.Body.stkCallback.CallbackMetadata.Item[3].Value.toString()})  
        
        const cartItems = user.cartItems;    

         //Create a new order and save it to the db                   
        await new Order({
            transactionId: req.body.Body.stkCallback.CallbackMetadata.Item[1].Value.toString(),
            amount: req.body.Body.stkCallback.CallbackMetadata.Item[0].Value,
            products: cartItems,
            created: Date.now(),
            contact: req.body.Body.stkCallback.CallbackMetadata.Item[3].Value.toString(),
            _user: user._id

        }).save()

        //clear the cart from the user after successful order
        await User.updateOne({ 
                              _id: user._id 
                              },
                            {
                                $set : { cartItems: [], phoneNumber: ''}
                            }


        ).exec();        

        res.status(200).send('Success');       
        // To redirect a post req to another route handler, we can add 307 like below, to retain the data
        // res.redirect(307, '/api/new_order'); 
        
        // req.body.Body.ResultCode;
        // req.body.Body.ResultDesc;
        // Transaction timestamp : req.body.Body.stkCallback.CallbackMetadata.Item[2].Value     
       
    
    })   



    app.post('/api/new_order', requireLogin, getMpesaOauthToken, async(req, res)=>{
       const { cartItems, total, mobileNumber } = req.body;       

       const lastEight = mobileNumber.substr(mobileNumber.length - 8); // We're getting the last 8 digits
        const refinedNumber = '2547'+ lastEight;
        

        //We are setting the req.user's db's phone no. as the one entered in the client form
        await User.updateOne({
            _id: req.user.id
        },
        {
            $set : { phoneNumber: refinedNumber, cartItems: cartItems},
            

        })

        

        const user = await User.findOne({_id: req.user.id}) ;
        
        
        // ======================================To be refactored
        
        const access_token = req.access_token       
        
        
        const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        auth = "Bearer " + access_token;               

        let d = new Date();
        d = new Date(d.getTime() - 3000000);
        var timestamp = d.getFullYear().toString()+""
        +((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+""
        +(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+""
        +(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+""
        +((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+"00";
        
                 
      
        
        const password = new Buffer.from("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp).toString('base64')
        

         

       
       
        request(
                    {
                        url: endpoint,
                        method: "POST",
                        headers: {
                            "Authorization": auth
                        },
                        json: {
                            "BusinessShortCode": "174379 ",
                            "Password": password,
                            "Timestamp": timestamp,
                            "TransactionType": "CustomerPayBillOnline",
                            "Amount": total,
                            "PartyA": refinedNumber,
                            "PartyB": "174379 ",
                            "PhoneNumber": refinedNumber,
                            "CallBackURL": "https://jamanu.herokuapp.com/api/stk_callback",
                            "AccountReference": refinedNumber,
                            "TransactionDesc": "Payment "
                        }
                        
    
                    },
                     (error, response, body) =>{
                        if(error){
                            console.log(error);
                            res.status(400).send(error)
                            
                        }                  
                        res.send(user);                       
                         
                        
                    }
                )
            
    // ======================================To be refactored

       
    })

    app.put('/api/update_order_status', requireLogin, requireAdmin, async (req, res)=>{
        const { newStatus, orderId } = req.body;

        await Order.updateOne({
            _id: orderId
        },
        {
            $set : { status: newStatus},
            

        })

        res.send(req.user)
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

    
   app.post('/api/check_order_update', async (req, res)=>{ 

        //We use req.setTimeout(300000); to tell the server what amount of timeout we want for requests

        const { user } = req.body;      

        
        const getOrderUpdate = async ()=>{
            const foundUser = await User.findOne({_id: user._id}).exec()
            
            if(foundUser.ordersMade > user.ordersMade){              
                
                res.send(foundUser)  
            
            }
        }
                    
        

        let timerId = setInterval(() =>{ getOrderUpdate() }, 5000);

        // after 20 seconds stop
        setTimeout(() => { clearInterval(timerId); res.json({ "error":"Time out"}); } , 20000);        
        

   })


}