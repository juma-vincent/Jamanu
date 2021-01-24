const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser')
require('./models/User');
require('./models/Product');
require('./models/Category');
require('./models/Order');
require('./services/passport');


const getMpesaOauthToken = require('./middlewares/getMpesaOauthToken');
const makeMpesaRequest = require('./services/mpesa');


mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // lifespan of the cookie is 30 days, converted to miliseconds
        keys: [keys.cookieKey] // this key allows us to encrypt our cookie.
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/productRoutes')(app);
require('./routes/orderRoutes')(app);


if(process.env.NODE_ENV === 'production'){
// Express will serve up Production assets like our main.js file, or main.css file
app.use(express.static('client/build'));

//Express will serve up the index.html file if it doesn't recognise the route
const path = require('path');
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
}







// app.post('/stk_callback', (req, res)=>{
//     console.log('-----------------STK-----------------')
//     console.log(req.body)
//     res.send(req.body)
// })

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);
server.timeout = 240000;
