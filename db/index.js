// const mongoose = require("mongoose");
// //you can create new db in line 3 'booksDatabase' instead of doing use in terminal
// mongoose
//   .connect("mongodb://127.0.0.1:27017/booksDatabase", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to MongoDB.");
//   })
//   .catch((e) => {
//     console.error("Connection error", e.message);
//   });
// mongoose.set("debug", true); // this will show you the raw query in your terminal
// const db = mongoose.connection;

// module.exports = db;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/booksDatabase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("conncted to mongooos ");
  })
  .catch((e) => {
    console.error("erroe mongoos ", e);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
