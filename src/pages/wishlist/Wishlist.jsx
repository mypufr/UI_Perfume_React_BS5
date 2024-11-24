import React, { useEffect } from "react";
import { useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  console.log(localStorage);

  useEffect(() => {
    try {
      const sotredWishlist = localStorage.getItem("wishlist");
      if (sotredWishlist) {
        setWishlist(JSON.parse(sotredWishlist));
      }
    } catch (error) {
      console.error("載入錯誤", error);
      setWishlist([]);
    }
  }, []);
  return (
    <div>
      <ul>
        {wishlist.length > 0 ? (
          <div className="row">
            {wishlist.map((item) => (
              <div className="col-12 col-md-3 mb-4" key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    alt={item.title}
                    height="255"
                    className="object-fit"
                  />

                  <div className="card-body">
                    <h3 className="card-title fs-4 fw-semibold m-0">
                      {item.title}
                    </h3>

                    <p className="fs-5 m-0">{item.category}</p>
                    <p className="m-0 d-flex align-items-center gap-2">
                      NT${item.price}
                      <span className="text-secondary">
                        NT${item.origin_price}
                      </span>
                    </p>
                    <button className="btn btn-primary">取消收藏</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>願望清單是空的喔!</p>
        )}
      </ul>
    </div>
  );
}

export default Wishlist;
