const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    publishedYear: Int
    user: User
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
    books: [Book]
    book(id: ID!): Book
    products: [Product]
  }

  type Mutation {
    addUser(name: String!, email: String!, age: Int): User
    updateUser(id: ID!, name: String, email: String, age: Int): User
    deleteUser(id: ID!): String
    addProduct(name: String!, description: String!, price: Int): Product

    addBook(
      title: String!
      author: String!
      publishedYear: Int
      userId: ID!
    ): Book
    updateBook(id: ID!, title: String, author: String, publishedYear: Int): Book
    deleteBook(id: ID!): String
  }
`;

module.exports = typeDefs;
