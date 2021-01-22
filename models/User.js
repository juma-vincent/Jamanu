const mongoose = require('mongoose');
const { Schema }= mongoose;

const UserSchema = new Schema({
    googleId: String,
    name: String,  
    email: String,
    imageurl:String,
    phoneNumber: { type: String, default: ''},
    isAdmin:{type: Boolean, default: false} ,
    uploadedProducts: {type: Number, default: 0}, 
    ordersMade: {type: Number, default: 0}
});

mongoose.model('users', UserSchema);