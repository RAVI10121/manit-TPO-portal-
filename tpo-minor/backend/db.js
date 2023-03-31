const mongoose = require("mongoose");
const URI =
  // "mongodb://localhost:27017/tpo?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
  "mongodb+srv://rkravi1012:raviahirwar@cluster0.u7afg0v.mongodb.net/?retryWrites=true&w=majorit"
const connect = () => {
  mongoose.connect(URI, () => {
    console.log("Connect ho gya bhayaji !!");
  });
};
module.exports = connect;
