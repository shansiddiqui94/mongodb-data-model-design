// const db = require("./db");
// const Publisher = require("./models/publisher");
// const Book = require("./models/book");
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// //CRUD Actions  find, create, update, delete

// //Find A book

// const findBooks = async () => {
//   const thePowerOfNow = await Book.find({ title: "The Power of Now" });
//   console.log(thePowerOfNow);
// };

// //Create a book
// const createBook = async () => {
//   const newBook = await Book.insertMany({
//     title: "Adventure of Pad",
//     author: "Shan Siddiqui",
//     publisher: "Lombardo LLC",
//     _id: 8773934448,
//   });
//   console.log(newBook);
// };
// //update a book
// //delete a book

// const run = async () => {
//   await findBooks();
//   await createBook();
//   process.exit();
// };
// run();

// //node query.js to run it

const db = require("./db");
const Publisher = require("./models/publisher");
const Book = require("./models/book");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
/// find book
/// create book
/// update books
/// deltete book
//
const createPublisher = async () => {
  const pub = await Publisher.insertMany({
    name: "As told by Ginger",
    location: "new york",
    url: "www.nickelodean.com",
  });
  console.log("Nostalgic Books", pub);
};


const createBook = async () => {
  const gem = await Publisher.find({ name: "As told by Ginger" });
  const newBook = await Book.insertMany({
    title: "As told by Ginger Foutley",
    author: "Ginger Foutley",
    published_date: "2000",
    publisher_id: gem[0]._id,
  });

  console.log("New Book", newBook);
};

const updateBook = async () => {
  const newUpdate = await Book.updateMany(
    { title: "Mercy" },
    { $set: { title: " UpdatedBookName" } }
  );
  console.log("new update in name add mr ", newUpdate);
};

const deletingBook = async () => {
  const deleteOneBook = await Book.deleteOne({
    title: "Newbooks",
  });
  console.log("book deleted:", deleteOneBook);
};

const findAllBook = async () => {
  const allbook = await Book.find({});
  console.log("all book ", allbook);
};

const run = async () => {
  await createPublisher();
  await createBook();
  await updateBook();
  await deletingBook();
  await findAllBook();
  db.close();
};
run();
