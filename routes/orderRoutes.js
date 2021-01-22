const requireLogin = require("../middlewares/requireLogin");
const mongoose = require('mongoose');
const requireAdmin = require("../middlewares/requireAdmin");
const getMpesaOauthToken = require("../middlewares/getMpesaOauthToken");
const makeMpesaRequest = require('../services/mpesa');
const request = require('request');


const Order = mongoose.model('orders');


module.exports = (app)=>{

    app.post('/api/stk_callback',  (req, res)=>{
        console.log('--------------STK ---------- AFTER----PAYMENT---RESPONSE') 
        console.log('------------------Body--------------') 
        console.log(req.body.Body) ; 
        console.log('------------Body DOT -----STKCALLBACK') 
        console.log(req.body.Body.stkCallback) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------') 
        console.log(req.body.Body.stkCallback.CallbackMetadata) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA-----MpesaReceiptNumber----') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.MpesaReceiptNumber) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------TransactionDate') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.TransactionDate) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------PhoneNumber') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.PhoneNumber) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------Amount') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.Amount) ; 


        const updateOrder= ()=>{
            return res.body.Body.stkCallback.CallbackMetadata.MpesaReceiptNumber
        }
        
        
        
           
      
       
    
})   

    app.post('/api/new_order', requireLogin, getMpesaOauthToken, async(req, res)=>{
       const { cartItems, total, mobileNumber } = req.body;

       const order = new Order({
         transactionId: 'TRANSACTIONID',
         amount: total,
         products: cartItems,
         created: Date.now(),
         contact: mobileNumber,
         _user: req.user.id


       });

       
        const lastEight = mobileNumber.substr(mobileNumber.length - 8); // We're getting the last 8 digits
        const refinedNumber = '2547'+ lastEight;

         //Process MPESA transaction, if successful, proceed           
         
        const access_token = req.access_token
        // const mpesaReponse =  makeMpesaRequest(auth, access_token,refinedNumber);

        // ----------------------------------------------------------------MPESA API
        const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        auth = "Bearer " + access_token; 
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
    
        const timestamp = year + stringmonth + day + hours + minutes + "00"                
    
        console.log("Timestamp", timestamp);
        let valid = (new Date(timestamp)).getTime() > 0;
        console.log(valid)
        const password = new Buffer.from("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp).toString('base64')
    
        // console.log("Password", password)
       
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
                            "AccountReference": "0712062516 ",
                            "TransactionDesc": "Payment "
                        }
                        
    
                    },
                    async (error, response, body) =>{
                        if(error){
                            console.log(error)
                        }
                        
                        
                        
                        res.send(body);  
                        
                    }
                )
    const ord = updateOrder()
    if(ord){
        await order.save();
        req.user.ordersMade +=1;
        const user = await req.user.save();
        res.send(user)
    }
               
        // ----------------------------------------------------------------MPESA API


//      app.post('/api/stk_callback',  (req, res)=>{
//         console.log('--------------STK ---------- AFTER----PAYMENT---RESPONSE') 
//         console.log('------------------Body--------------') 
//         console.log(req.body.Body) ; 
//         console.log('------------Body DOT -----STKCALLBACK') 
//         console.log(req.body.Body.stkCallback) ; 
//         console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------') 
//         console.log(req.body.Body.stkCallback.CallbackMetadata) ; 
//         res.redirect('/dashboard'); 
//         logger.debug('Calling MPESA RESPONSE');      
        
           
      
       
    
// })   
        
        

        

        
    //    }catch(err){
    //        res.status(422).send(err); // 422 means Something is wrong with the MPESA center, like network issues

    //    }

       
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