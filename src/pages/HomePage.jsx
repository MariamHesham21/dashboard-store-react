import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { IoCartOutline, IoPeopleOutline } from "react-icons/io5";

import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import CustomersPage from "./CustomersPage";
import SettingPage from "./SettingPage";

const HomePage = ({productsData,deleteHandle,handleOpenPopup}) => {
  const [selectedPage, setSelectedPage] = useState("products");

  /*const renderPage = () => {
    if (selectedPage === "products") {
      return <ProductsPage />;
    } else if (selectedPage === "orders") {
      return <OrdersPage />;
    } else if (selectedPage === "customers") {
      return <CustomersPage />;
    } else {
      return <ProductsPage />;
    }
  };*/

  return (
    <div className="homePage-container">
      {/* ============== Sidebar ============================*/}
      <aside className="sidebar-container">
        <div className="sidebar-main-icons">
          <ul>
            <li onClick={() => setSelectedPage("products")}>
              <BsBoxSeam aria-label="products" className="icon-contain" />
            </li>
            <li onClick={() => setSelectedPage("orders")}>
              <IoCartOutline
                aria-label="orders"
                className="icon-contain icon-small"
              />
            </li>
            <li onClick={() => setSelectedPage("customers")}>
              <IoPeopleOutline
                aria-label="customers"
                className="icon-contain icon-small"
              />
            </li>
          </ul>
        </div>
        <div className="sidebar-setting-icons">
          <ul>
            <li onClick={() => setSelectedPage("setting")}>
              <IoMdSettings
                aria-label="setting"
                className="icon-contain icon-small"
              />
            </li>
          </ul>
        </div>
      </aside>
      {/*=============== Main Content ====================*/}
      <div className="mainSection-container">
        {/* {renderPage()} */}
        {selectedPage === "products" && <ProductsPage productsData={productsData} deleteHandle={deleteHandle} handleOpenPopup={handleOpenPopup}/>}
        {selectedPage === "orders" && <OrdersPage />}
        {selectedPage === "customers" && <CustomersPage />}
        {selectedPage === "setting" && <SettingPage />}
      </div>
    </div>
  );
};

export default HomePage;
