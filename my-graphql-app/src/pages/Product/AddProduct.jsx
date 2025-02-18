import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT, GET_PRODUCTS } from "../../graphql/index";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [userId, setUserId] = useState("");

  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct({ variables: { name, description, price: parseFloat(price), userId } });
    setName("");
    setDescription("");
    setPrice("");
    setUserId("");
  };

  return (
    <div className="card p-3">
      <h4 className="mb-3">Add Product</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
