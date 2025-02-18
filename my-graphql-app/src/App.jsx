import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/Product/AddProduct";
import ProductList from "./pages/Product/ProductList";
import AddUser from "./pages/User/AddUser";
import UserList from "./pages/User/UserList";
import Navbar from "./pages/Header/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/products" element={<><AddProduct /><ProductList /></>} />
          <Route path="/users" element={<><AddUser /><UserList /></>} />
          <Route path="/" element={<h2>Welcome to GraphQL App</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
