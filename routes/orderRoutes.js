const requireLogin = require("../middlewares/requireLogin");
const mongoose = require('mongoose');
const requireAdmin = require("../middlewares/requireAdmin");
const getMpesaOauthToken = require("../middlewares/getMpesaOauthToken");
const request = require('request');


const Order = mongoose.model('orders');
const User = mongoose.model('users');


module.exports = (app)=>{

    app.post('/api/stk_callback', async (req, res)=>{

        await User.updateOne({ 
                                phoneNumber: req.body.Body.stkCallback.CallbackMetadata.Item[3].Value 
                            },
                            {
                                $inc : { ordersMade: 1}
                            }

            
        ).exec();

        const user = await User.findOne({phoneNumber: req.body.Body.stkCallback.CallbackMetadata.Item[3].Value})                    
        console.log('FOUND USER ID ----WITH MOBILE======', user._id)
        
        console.log('UPDATED USER  ----WITH 1 MORE ORDER======HENCE NO OF ORDERS====', user.ordersMade)
        console.log('--------------STK ---------- AFTER----PAYMENT---RESPONSE') 
        console.log('------------------Body--------------') 
        console.log(req.body.Body) ; 
        console.log('------------Body DOT -----STKCALLBACK') 
        console.log(req.body.Body.stkCallback) ; 
        // console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------') 
        // console.log(req.body.Body.stkCallback.CallbackMetadata) ; 
        // console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA-----ITEM----') 
        // console.log(req.body.Body.stkCallback.CallbackMetadata.Item) ;
        // console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------Amount') 
        // console.log(req.body.Body.stkCallback.CallbackMetadata.Item[0].Value) ; 
        // console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------MpesaReceiptNumber') 
        // console.log(req.body.Body.stkCallback.CallbackMetadata.Item[1].Value) ; 
        // console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------DATE TRANS') 
        // console.log(req.body.Body.stkCallback.CallbackMetadata.Item[2].Value) ; 
        // console.log('B-----------Body DOT -----STKCALLBACK DOT CALLBACK----- METADATA--------PHONE NUMBER') 
        // console.log(req.body.Body.stkCallback.CallbackMetadata.Item[3].Value) ; 
        // console.log('-------------REQUEST USER OBJECT-----------',req.user);

        // req.body.Body.ResultCode;
        // req.body.Body.ResultDesc;

        res.status(200).send('Success');       
        // res.redirect(307, '/api/new_order');
        
        
        

       
        
        
        
           
      
       
    
})   

    app.post('/api/new_order', requireLogin, getMpesaOauthToken, async(req, res)=>{
       const { cartItems, total, mobileNumber } = req.body;       

       const lastEight = mobileNumber.substr(mobileNumber.length - 8); // We're getting the last 8 digits
        const refinedNumber = '2547'+ lastEight;

        await User.updateOne({
            _id: req.user.id
        },
        {
            $set : { phoneNumber: refinedNumber}

        }).exec()

        const user = await User.findOne({_id: req.user.id})
        
        res.send(user)
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

         

       
       
        // request(
        //             {
        //                 url: endpoint,
        //                 method: "POST",
        //                 headers: {
        //                     "Authorization": auth
        //                 },
        //                 json: {
        //                     "BusinessShortCode": "174379 ",
        //                     "Password": password,
        //                     "Timestamp": timestamp,
        //                     "TransactionType": "CustomerPayBillOnline",
        //                     "Amount": total,
        //                     "PartyA": refinedNumber,
        //                     "PartyB": "174379 ",
        //                     "PhoneNumber": refinedNumber,
        //                     "CallBackURL": "https://jamanu.herokuapp.com/api/stk_callback",
        //                     "AccountReference": refinedNumber,
        //                     "TransactionDesc": "Payment "
        //                 }
                        
    
        //             },
        //              (error, response, body) =>{
        //                 if(error){
        //                     console.log(error);
        //                     res.status(400).send(error)
                            
        //                 }                  
                                                 
        //                 res.send(user);  
                        
        //             }
        //         )
         
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
    
   app.post('/api/check_order_update', (req, res)=>{       
       const { user } = req.body;
       
       console.log('-----------INCOMING---USER OBJECT-BEFORE --ORDER-COMPARISON---')
       console.log(user)

       async function getOrderUpdate() {
        const foundUser = await User.findOne({_id: user._id}).exec()
        console.log('======FOUNNNNND ------USERRRRRRRRR');
        console.log(foundUser)
        console.log('======FOUNNNNND ------USERRRRRRRRRS ORDERS MADE-----')
        console.log(foundUser.ordersMade)
        if(foundUser.ordersMade > user.ordersMade){
            console.log('======FOUNNNNND ===AN ORDER INCREMENT, HENCE SUCCESSFUL ORDER')
            
          res.send(foundUser)  
           
         }else{
            console.log('=NO=====FOUNNNNND == ORDER INCREMENT, HENCE NO ORDER YET')

         }
         

        
      }
      
    //   setTimeout(getOrderUpdate, 10000);
      

       let timerId = setInterval(async () =>{
           getOrderUpdate()

            // const foundUser = await User.findOne({_id: user.id})
            // if(foundUser.ordersMade===user.ordersMade){
            //     console.log('-----------FOUND---USER OBJECT-DURING --ORDER-COMPARISON---')
            //     console.log(foundUser)
            //     res.send(foundUser)
            // }
            // console.log('---NOT--YET-----FOUND---USER OBJECT-DURING --ORDER-COMPARISON---')

       }, 10000);

        // after 50 seconds stop
        setTimeout(() => { clearInterval(timerId); res.json({ "error":"Time out"}); } , 40000);
        

        
        

   })


}