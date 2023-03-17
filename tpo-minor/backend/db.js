const mongoose = require("mongoose");
const URI =
  // "mongodb://localhost:27017/tpo?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
  "mongodb+srv://pranav:Pg07%40mongodbatlas@cluster0.1y6tm.mongodb.net/tpo?retryWrites=true&w=majority"
const connect = () => {
  mongoose.connect(URI, () => {
    console.log("Connect ho gya bhayaji !!");
  });
};
module.exports = connect;
