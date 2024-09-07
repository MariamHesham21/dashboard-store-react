import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import PopupSection from "./components/PopupSection";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [popUpActive, setPopUpActive] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getAllCategory = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setAllCategory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataProducts();
    getAllCategory();
  }, []);

  const deleteHandle = async (id) => {
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

  const handleOpenPopup = () => {
    setPopUpActive(true);
  };

  const handleClosePopup = () => {
    setPopUpActive(false);
  };

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post('https://fakestoreapi.com/products', {
        title: formData.title,
        price: formData.price,
        category: formData.category,
      })
      console.log(response);
      console.log(response.data);
      setProductsData((prevData) => [...prevData, response.data]);

      setFormData({
        title: "",
        price: "",
        category: "",
      });

      handleClosePopup()
      
    } catch (error){
        console.error("Error fetching data:", error);
      }
  };

  return (
    <div className="App">
      <HomePage
        productsData={productsData}
        deleteHandle={deleteHandle}
        handleOpenPopup={handleOpenPopup}
      />
      {popUpActive && (
        <PopupSection
          allCategory={allCategory}
          handleClosePopup={handleClosePopup}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
