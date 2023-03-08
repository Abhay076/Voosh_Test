const express = require("express");
const router = express.Router();
const checkAuth = require("../controllers/check-auth");

const ordersController = require("../controllers/order");

router.post("/add-order", checkAuth, ordersController.create_order);
router.get("/:id", ordersController.get_order);

module.exports = router;
