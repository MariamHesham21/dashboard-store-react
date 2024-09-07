import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const PopupSection = ({ allCategory,handleClosePopup,formData,handleChange,handleSubmit}) => {
  return (
    <div className="popup-container">
      <div className="popup-section">
        <div className="close-button-contain">
          <IoIosCloseCircle className="close-button" onClick={handleClosePopup}/>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="name..."
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="price..."
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select a category
                </option>
                {allCategory.length ? (
                  allCategory.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option value="" hidden>
                    No categories available
                  </option>
                )}
              </select>
            </div>
            <div className="form-button-control">
              <button className="form-button">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupSection;

{
  /* <div className="form-control">
              <label htmlFor="category">Cover Photo</label>
    </div> */
}
