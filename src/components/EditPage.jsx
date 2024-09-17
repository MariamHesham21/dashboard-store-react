import React from "react";

const EditPage = ({ allCategory }) => {
    return (
        <div className="edit-page-contanier">
            <div className="editPage-contain">
                <form className="form-edit">
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="name..."
                        // value={formData.title}
                        // onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="price..."
                        // value={formData.price}
                        // onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                        // value={formData.category}
                        // onChange={handleChange}
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
                        <button className="form-button" type="submit">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPage;
