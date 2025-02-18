const User = require("../models/userModel");
const Book = require("../models/bookModel");
const Product = require("../models/productModel");

const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id).populate("books"),
    books: async () => await Book.find().populate("user"),
    book: async (_, { id }) => await Book.findById(id).populate("user"),
    products: async () => await Product.find(),
  },

  Mutation: {
    addUser: async (_, { name, email, age }) => {
      const newUser = new User({ name, email, age });
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, { id, name, email, age }) => {
      return await User.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
      );
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "User deleted successfully";
    },

    addBook: async (_, { title, author, publishedYear, userId }) => {
      const user = await User.findById(userId);
      if (!user) throw new Error("User not found");

      const newBook = new Book({ title, author, publishedYear, userId });
      await newBook.save();

      return newBook.populate("user");
    },
    updateBook: async (_, { id, title, author, publishedYear }) => {
      return await Book.findByIdAndUpdate(
        id,
        { title, author, publishedYear },
        { new: true }
      );
    },
    deleteBook: async (_, { id }) => {
      await Book.findByIdAndDelete(id);
      return "Book deleted successfully";
    },
    addProduct: async (_, { name, description, price }) => {
      const newProduct = new Product({ name, description, price });
      await newProduct.save();
      return newProduct;
    },
  },

  User: {
    books: async (parent) => await Book.find({ userId: parent.id }),
  },

  Book: {
    user: async (parent) => await User.findById(parent.userId),
  },
};

module.exports = resolvers;
