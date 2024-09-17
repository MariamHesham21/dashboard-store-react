import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import PopupSection from "./components/PopupSection";
import { baseUrl } from "./utils/Api";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import EditComponent from "./components/EditComponent";
import EditPage from "./components/EditPage";

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
    // get data from api and save in state
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // get categories from api and save in state
    const getAllCategory = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products/categories`);
        setAllCategory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataProducts();
    getAllCategory();
  }, []);

  // delete data from state (api)
  const deleteHandle = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/products/${id}`);
      console.log(response.data);
      setProductsData((prevData) =>
        prevData.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // popup contanier active (open & close)
  const handleOpenPopup = () => {
    setPopUpActive(true);
  };

  const handleClosePopup = () => {
    setPopUpActive(false);
  };

  // form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // add new data in state (api)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post(`${baseUrl}/products`, {
        title: formData.title,
        price: formData.price,
        category: formData.category,
      });
      console.log(response);
      console.log(response.data);
      setProductsData((prevData) => [...prevData, response.data]);

      setFormData({
        title: "",
        price: "",
        category: "",
      });

      handleClosePopup();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // update data in state (api)
  
  // const handleUpdate = async (id, updatedData) => {
  //   try {
  //     const response = await axios.put(
  //       `${baseUrl}/products/${id}`,
  //       updatedData
  //     );
  //     console.log(response.data);

  //     setProductsData((prevData) =>
  //       prevData.map((product) =>
  //         product.id === id ? { ...product, ...updatedData } : product
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating data:", error);
  //   }
  // };

  const handleUpdate = () => {
    try {
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                productsData={productsData}
                deleteHandle={deleteHandle}
                handleOpenPopup={handleOpenPopup}
              />
            }
          />
          {/* <Route
            path="/edit/:id"
            element={<EditComponent handleUpdate={handleUpdate} />}
          /> */}
          <Route
            path="/edit/:id"
            element={<EditPage allCategory={allCategory}/>}
          />
        </Routes>
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
    </BrowserRouter>
  );
}

export default App;
