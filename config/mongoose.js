const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhay:abhay123@cluster0.pbi4d.mongodb.net/voosh_db"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to db"));
db.once("open", function () {
  console.log("Successfully connected to database");
});
