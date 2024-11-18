import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
