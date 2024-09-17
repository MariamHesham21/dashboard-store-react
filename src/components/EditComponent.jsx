import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Api';

const EditComponent = ({ handleUpdate }) => {
  const { id } = useParams();
  console.log("id",id);
  
  const navigate = useNavigate();

  return (
    <div className="edit-component">
      <h2>Edit Product</h2>
      <form>
        <div>
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            // value={product.title}
            // onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            // value={product.category}
            // onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {/* {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))} */}
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            // value={product.price}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditComponent;
