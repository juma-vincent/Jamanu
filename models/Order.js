const mongoose = require('mongoose');
const cartItemSchema = require('./CartItem');
const { Schema } = mongoose;
const CartItemSchema = require('./CartItem');

const orderSchema = new Schema({
    transactionId: String,
    created: Date,
    products:[CartItemSchema],
    amount: Number,
    status: { type: String, default: 'Unprocessed'}, 
    contact: String, 
    _user: {type: Schema.Types.ObjectId, ref:'User'}

});

mongoose.model('orders', orderSchema);

//other statuses processing, processed, shipping, delivered, cancelled