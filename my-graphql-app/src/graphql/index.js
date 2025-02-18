import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      price
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Int!) {
    addProduct(name: $name, description: $description, price: $price) {
      id
      name
      price
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      age
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $age: Int!) {
    addUser(name: $name, email: $email, age: $age) {
      id
      name
      email
      age
    }
  }
`;
