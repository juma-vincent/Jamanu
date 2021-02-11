//This is only for C2B
const request = require('request');

module.exports = (req, res, next)=>{
    url= "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
    auth = "Bearer " +  req.access_token

    request(
        {
            url: url,
            method: "POST",
            headers:{
                "Authorization": auth,
            },
            json : {
                "ShortCode": "174379",
                "ResponseType": "Complete",
                "ConfirmationURL": "https:/jamanu.herokuapp.com/confirmation",
                "ValidationURL": "https:/jamanu.herokuapp.com/validation_url"
              } 

        },
        (error, response, body)=>{
            if(error){
                console.log(error);
            }

            res.status(200).json(body)

            
        }
    )

}