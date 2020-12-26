const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    imageUrl: String,

});

mongoose.model('categories', categorySchema);