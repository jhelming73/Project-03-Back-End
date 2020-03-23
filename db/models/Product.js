const mongoose = require('../connection');

const ProductSchema = mongoose.Schema({
      description: String
    , imageURL:    String
    , price:       mongoose.Decimal128
});

module.exports = mongoose.model("Product", ProductSchema);