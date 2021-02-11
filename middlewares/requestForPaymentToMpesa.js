const request = require('request');

module.exports = (req, res, next)=>{
    const access_token = req.access_token   
    const { total, mobileNumber } = req.body;

    const lastEight = mobileNumber.substr(mobileNumber.length - 8); // We're getting the last 8 digits
    const refinedNumber = '2547'+ lastEight;

    const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        auth = "Bearer " + access_token;               

        let d = new Date();
        d = new Date(d.getTime() - 3000000);

        const timestamp = d.getFullYear().toString()+""
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
                        res.send(body);                       
                         
                        
                    }
                );
         

    next();
}