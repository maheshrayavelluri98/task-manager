const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)

  .then(() => {
    console.log("Mongo Db is Connected...");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error", error);
  });
