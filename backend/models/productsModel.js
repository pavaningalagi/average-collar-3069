const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    title:{type: String, required: true},
    price:{type: Number, required: true},
    strikePrice:{type: Number},
    category:{type: String, required: true},
    sub_category:{type: String, required: true},
    size:{type: String, required: true},
    colors:{type: Array, required: true},
    photos:{type: Array, required: true}
});

const productsModel = mongoose.model('product', productsSchema);

module.exports = {
    productsModel
}