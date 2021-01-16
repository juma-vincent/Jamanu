const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
 name: String,
 price: Number,
 quantity: Number,
 imageurl: String,
});

module.exports = cartItemSchema;