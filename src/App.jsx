import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Wishlist from "./pages/wishlist/Wishlist.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
