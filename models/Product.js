const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number,    
    category: String,
    imageUrl: String,
    unitType: String,
    created: Date,
    _user: { type: Schema.Types.ObjectId, ref:'User'}

});

mongoose.model('products', productSchema);