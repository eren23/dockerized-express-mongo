const mongoose = require("mongoose");
require("dotenv").config();

const db = `mongodb+srv://${process.env.USER}:${process.env.DB_NAME}@devconnector.psnzr.mongodb.net/${process.env.DB_PASSWORD}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Mongo DB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
