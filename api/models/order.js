const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User ID",
    required: true,
  },
  sub_total: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
