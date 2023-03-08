const Order = require("../models/order");

const mongoose = require("mongoose");

exports.create_order = (req, res, next) => {

  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    user_id: req.body.user_id,
    sub_total: req.body.sub_total,
    phone_number: req.body.phone_number,
  });

  //save the order to the db
  order
    .save()
    .then((result) => {
      //send back some results to validate creation of the product
      res.status(201).json({
        message: "Order added successfully",
        createdOrder: {
          user_id: result.user_id,
          sub_total: result.sub_total,
          phone_number: result.phone_number,
          _id: result._id,
        },
        request: {
          type: "POST",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//get order
exports.get_order = (req, res, next) => {
  const id = req.params.id;

  //grab the product based on the id, and send back the doc
  Order.findById(id)
    .select("user_id sub_total phone_number")
    .exec()
    .then((result) => {
      //config a response with extra info
      const response = {
         order: result,
        request: {
          type: "GET",
          description: "Get Order",
        },
      };

      if (result) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided id",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};