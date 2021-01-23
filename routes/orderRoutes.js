const requireLogin = require("../middlewares/requireLogin");
const mongoose = require('mongoose');
const requireAdmin = require("../middlewares/requireAdmin");
const getMpesaOauthToken = require("../middlewares/getMpesaOauthToken");
const makeMpesaRequest = require('../services/mpesa');
const request = require('request');


const Order = mongoose.model('orders');
const User = mongoose.model('users');


module.exports = (app)=>{

    app.post('/api/stk_callback', async (req, res)=>{

        const user = await User.findOne({ phoneNumber: req.body.Body.stkCallback.CallbackMetadata.Item[3].Value });
        console.log('FOUND USER ID ----WITH MOBILE======', user._id)
        user.ordersMade += 15;
        console.log('UPDATED USER  ----WITH 15 MORE ORDERS======', user)
        console.log('--------------STK ---------- AFTER----PAYMENT---RESPONSE') 
        console.log('------------------Body--------------') 
        console.log(req.body.Body) ; 
        console.log('------------Body DOT -----STKCALLBACK') 
        console.log(req.body.Body.stkCallback) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------') 
        console.log(req.body.Body.stkCallback.CallbackMetadata) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA-----ITEM----') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.Item) ;
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------Amount') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.Item[0].Value) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------MpesaReceiptNumber') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.Item[1].Value) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------DATE TRANS') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.Item[2].Value) ; 
        console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------PHONE NUMBER') 
        console.log(req.body.Body.stkCallback.CallbackMetadata.Item[3].Value) ; 
        console.log('-------------REQUEST USER OBJECT-----------',req.user);

        // req.body.Body.ResultCode;
        // req.body.Body.ResultDesc;

        // res.send({})        
        // res.redirect(307, '/api/new_order');
        res.redirect('/dashboard')
        
        

       
        
        
        
           
      
       
    
})   

    app.post('/api/new_order', requireLogin, getMpesaOauthToken, async(req, res)=>{
       const { cartItems, total, mobileNumber } = req.body;       

       const lastEight = mobileNumber.substr(mobileNumber.length - 8); // We're getting the last 8 digits
        const refinedNumber = '2547'+ lastEight;

        const user = await User.updateOne({
            _id: req.user.id
        },
        {
            $set : { phoneNumber: refinedNumber}

        }).exec()

    //    const order = new Order({
    //      transactionId: 'TRANSACTIONID',
    //      amount: total,
    //      products: cartItems,
    //      created: Date.now(),
    //      contact: refinedNumber,
    //      _user: req.user.id


    //    });

       
        

         //Process MPESA transaction, if successful, proceed           
         
        const access_token = req.access_token
        // const mpesaReponse =  makeMpesaRequest(auth, access_token,refinedNumber);

        // ----------------------------------------------------------------MPESA API
        const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        auth = "Bearer " + access_token; 
        let datenow = new Date();        

        let d = new Date();
        d = new Date(d.getTime() - 3000000);
        var timestamp = d.getFullYear().toString()+""
        +((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+""
        +(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+""
        +(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+""
        +((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+"00";
        console.log("REFINED TIMESTAMP =======", timestamp);
                 
        // const year = datenow.getFullYear().toString();
        let addedmonth = datenow.getMonth()+1 //months starts from 0 in Javascript
        const stringmonth = (addedmonth < 10 ? '0' : '') + (addedmonth.toString()); 
        // Since months in Javascript are in array form, so January is returned as 0, and we add 0 as a string
        //before it incase the current month is less than 10.
        // If the current month+ 1 is more than 10, we add empty string ''.
        // We then append the string value of the month +1         
    
        // const day = datenow.getDate().toString();
        // const hours = datenow.getHours().toString();
        // const minutes = datenow.getMinutes().toString();
        // const seconds = datenow.getSeconds().toString()
    
        // const rawtimestamp = year + stringmonth + day + hours + minutes + "00"    
        // const timestamp = datenow.getFullYear().toString() + datenow.getMonth() +  datenow.getDate().toString() + datenow.getHours().toString() + datenow.getMinutes().toString() +  datenow.getSeconds().toString()       
    
        // console.log("Timestamp", timestamp);
        // let valid = (new Date(timestamp)).getTime() > 0;
        // console.log(valid)
        const password = new Buffer.from("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + timestamp).toString('base64')
        // console.log("--------===================USER ===NEW ===========mobileNumber")
        
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
                            "AccountReference": refinedNumber,
                            "TransactionDesc": "Payment "
                        }
                        
    
                    },
                     (error, response, body) =>{
                        if(error){
                            console.log(error);
                            res.status(400).send(error)
                            
                        }                        
                        
                        res.redirect('/user/orders')
                        // res.send(body);  
                        
                    }
                )
         
    // const result = updateOrder()
    // if(result){
    //     console.log('===================PAYMENT =====SUCCESSFULL==========')
    //     console.log('===================RESULT IS ==========')
    //     console.log(result)       

        
    //     console.log('===================PAYMENT =====SUCCESSFULL==========')
    //     console.log('===================PAYMENT =====SUCCESSFULL==========')
    //     console.log('===================RESULT FIRST ITEM ===============')
    //     console.log(result.stkCallback.CallbackMetadata.Item[1].Value)
        // await order.save();
        // req.user.ordersMade +=1;
        // const user = await req.user.save();
        // res.send(user)
    // }
               
        // ----------------------------------------------------------------MPESA API



        

        

        
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