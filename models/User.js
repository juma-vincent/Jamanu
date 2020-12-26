const mongoose = require('mongoose');
const { Schema }= mongoose;

const UserSchema = new Schema({
    googleId: String,
    name: String,  
    email: String,
    isAdmin:{type: Boolean, default: false}  
});

mongoose.model('users', UserSchema);