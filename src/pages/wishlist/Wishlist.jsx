import React, { useEffect } from "react";
import { useState } from "react";
import "./wishlist.scss";
function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const removeFromWishlist = (itemToRemove) => {
    if (wishlist.some((item)=> item.id === itemToRemove.id)) {
      const updatedWishlist = wishlist.filter((item) => item.id !== itemToRemove.id);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      alert("已成功移除商品");
    } else {
      alert("移除失敗");
    }
    console.log(wishlist);
  };
  
  console.log(wishlist);


  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    } catch (error) {
      console.error("載入錯誤", error);
      setWishlist([]);
    }
  }, []);
  return (
    <div>
      <div className="container px-3">
        {wishlist.length > 0 ? (
          <div className="product-list row">
            {wishlist.map((item) => (
              <div className="col-12 col-md-3 col-sm-6 mb-4" key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-img object-fit"
                  />

                  <div className="card-body">
                    <h3 className="card-title fs-4 fw-semibold m-0">
                      {item.title}
                    </h3>

                    <p className="fs-5 m-0">{item.category}</p>
                    <p className="m-0 d-flex align-items-center gap-2">
                      NT${item.price}
                      <span className="text-secondary text-decoration-line-through">
                        NT${item.origin_price}
                      </span>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        removeFromWishlist(item);
                      }}
                    >
                      取消收藏
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="fs-2 text-secondary text-center mt-5">願望清單是空的喔!</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
