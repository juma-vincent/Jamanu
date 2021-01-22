const request = require('request');

module.exports = ( req, res, next)=>{                

    const consumer_key = "yVSMTgATzEpWGARxkkHXRxsGAyWqOqu2";
    const consumer_secret = "GTqE7aY3y6xczh6X";
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
       
    auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

    request({
                url:url,
                headers: {
                            "Authorization":  auth

                         }
           }, 
           (error, response, body)=>{
               if(error){
                   console.log(error)
               }else{
                   req.access_token = JSON.parse(body).access_token
                   next();
               }

           }
    )

    
        

}