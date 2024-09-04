import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import Table from "../components/Table";

const ProductsPage = ({ productsData ,deleteHandle}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = productsData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // Handler for page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="products-page-container">
      <div className="add-products-btn-contain">
        <button className="add-product-btn">
          <CgAdd className="icon-btn" />
          Add Product
        </button>
      </div>
      <div className="products-section-contain">
        <div className="products-header-info">
          <h2 className="product-header-h2">products</h2>
          <p className="product-header-p">
            Manage your products and view their sales performance.
          </p>
        </div>
        <div className="products-table-section">
          <div className="products-table-container">
            <Table data={currentData} deleteHandle={deleteHandle}/>
          </div>
          <div className="pagination-container">
            <div style={{ textAlign: "center" }}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  style={{
                    margin: "0 5px",
                    padding: "5px 10px",
                    border: "1px solid #ddd",
                    backgroundColor:
                      currentPage === index + 1 ? "#ddd" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
