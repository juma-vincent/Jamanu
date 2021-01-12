const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number,    
    category: String,
    imageurl: String,
    unitType: String,
    created: Date,
    _user: { type: Schema.Types.ObjectId, ref:'User'}

});

mongoose.model('products', productSchema);