import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const fetchResults = async () => {
    setLoading(true);

    try {
      const url =
        "https://ec-course-api.hexschool.io/v2/api/hex-project/products/all";

      const response = await axios.get(url);
      const ProductList = response.data.products;
      console.log(ProductList);

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

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      <div className="">
        {loading && <p className="text-center">下載中...</p>}
        {isVisible && (
          <p className={hasError ? "error-message" : "success-message"}>
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
                      <h3 className="card-title">{product.title}</h3>

                      <p>{product.category}</p>
                      <p>
                        NT${product.price}
                        <span>NT$ {product.origin_price}</span>
                      </p>
                      <FaHeart />
                      <IoMdCart />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <Pagination pagination={pagination} changePage={Products} />
      </div>
    </>
  );
};

export default Products;
