const request = require('request');

module.exports = (auth, access_token, refinedNumber)=>{  

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

    console.log("Password", password)
   
    return  request(
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
                        "Amount": "1",
                        "PartyA": refinedNumber,
                        "PartyB": "174379 ",
                        "PhoneNumber": refinedNumber,
                        "CallBackURL": "http://102.167.235.58:5000/stk_callback",
                        "AccountReference": "0712062516 ",
                        "TransactionDesc": "Payment "
                    }
                    

                },
                (error, response, body) =>{
                    if(error){
                        console.log(error)
                    }
                    return body
                }
            )
}
