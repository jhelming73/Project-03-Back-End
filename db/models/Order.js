const mongoose = require('../connection');

const OrderSchema = new mongoose.Schema({
      lineItems: [
        {
            ref: "Product"
          , type: mongoose.Schema.Types.ObjectId
        }
      ]
    , total: mongoose.Decimal128
});

module.exports = mongoose.model("Order", OrderSchema);