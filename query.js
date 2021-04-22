const db = require("./db");
const Publisher = require("./models/publisher");
const Book = require("./models/book");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//CRUD Actions  find, create, update, delete

//Find A book

const findBooks = async () => {
  const thePowerOfNow = await Book.find({ title: "The Power of Now" });
  console.log(thePowerOfNow);
};

//Create a book
//update a book
//delete a book
const createBook = async () => {
  const newBook = await Book.insertMany({ title });
  console.log(newBook);
};

const run = async () => {
  await findbook();
  await newBook();
  // process.exit()
};
run();

//node query.js to run it
