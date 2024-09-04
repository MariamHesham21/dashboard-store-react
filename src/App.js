import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";

function App() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataProducts();
  }, []);

  const deleteHandle = async (id) => {
    console.log("delete id: ", id);
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      setProductsData((prevData) =>
        prevData.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <HomePage productsData={productsData} deleteHandle={deleteHandle} />
    </div>
  );
}

export default App;
