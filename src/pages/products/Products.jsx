import React, { useEffect, useState } from "react";
import axios from "axios";

import "./products.scss";

import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

import Pagination from "../../components/pagination/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [total, setTotal] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // const [wishlist, setWishlist] = useState(() => {
  //   const savedList = localStorage.getItem("wishlist");
  //   return savedList ? JSON.parse(savedList) : [];
  // });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedList = localStorage.getItem("wishlist");
      return savedList ? JSON.parse(savedList) : [];
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage:", error);
      return [];
    }
  });

  const displayMessage = (newMessage, isErrorMessage = false) => {
    setHasError(isErrorMessage);
    setMessage(newMessage);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const reset = () => {
    setProducts([]);
    setTotal(0);
    setHasError(false);
    setPage(1);
  };

  const changePage = (newPage) => {
    setPage(newPage);

  };

  const fetchResults = async () => {
    setLoading(true);
    setWishlist([]);
    try {
      const url =
        "https://ec-course-api.hexschool.io/v2/api/hex-project/products/all";

      const response = await axios.get(url);
      const ProductList = response.data.products;


      if (ProductList.length > 0) {
        setProducts(ProductList);
        setTotal(ProductList.length);
      } else {
        displayMessage("沒有找到任何產品", true);
      }
    } catch (error) {
      console.error("出現錯誤了", error);
      displayMessage("下載失敗，請重新嘗試", true);
    } finally {
      setLoading(false);
    }
  };

  // const addToWishlist = (product) => {
  //   const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  //   if (wishlist.some((item) => item.id === product.id)) {
  //     alert("此商品已在願望清單裡了");
  //     return;
  //   }
  //   wishlist.push(product);
  //   localStorage.setItem("wishlist", JSON.stringify(wishlist));

  //   alert("商品已添加至願望清單");
  //   console.log(wishlist);
  // };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      displayMessage("已成功添加商品到願望清單", false);
    } else {
      displayMessage("此商品已在願望清單裡了!", true);
    }
    // console.log(wishlist);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log(wishlist);
  }, [wishlist]);

  return (
    <>
      <div className="text-secondary text-bold">
        {loading && <p className="text-center ">下載中...</p>}
        {isVisible && (
          <p
            className={
              hasError
                ? "error-message text-center"
                : "success-message text-center"
            }
          >
            {message}
          </p>
        )}

        {!loading && products.length > 0 && (
          <div className="product-list container">
            {/* <h2>產品列表</h2>
          <p>共 {total} 個產品</p> */}

            <div className="row">
              {products.map((product) => (


                <div className="col-12 col-md-3 mb-4" key={product.id}>
                  <div className="card">
                    <img
                      src={product.image}
                      alt={product.title}
                      height="255"
                      className="object-fit"
                    />

                    <div className="card-body">
                      <h3 className="card-title fs-4 fw-semibold m-0">{product.title}</h3>

                      <p className="fs-5 m-0">{product.category}</p>
                      <p className="m-0 d-flex align-items-center gap-2">
                        NT${product.price}
                        <span className="text-secondary text-decoration-line-through">NT${product.origin_price}</span>
                      </p>

                      <button
                        className={`btn border-0 bg-transparent p-0
                         ${wishlist.includes(product) ? "text-danger" : "text-primary"}`}
                        onClick={() => addToWishlist(product)}
                      >
                        <FaHeart className="fs-5"/>
                      </button>
                      <button className="btn custom-btn border-0 bg-transparent">
                        <IoMdCart className="fs-5"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <Pagination pagination={pagination} changePage={changePage} />
      </div>
    </>
  );
};

export default Products;
