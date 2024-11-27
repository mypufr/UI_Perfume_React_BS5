import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="d-none d-lg-block bg-primary">
        <ul className="container py-7 d-flex gap-6">
          <Link to="/">
            <li className="fs-5 text-white text-decoration-none">清新海洋</li>
          </Link>
          <Link to="/">
            <li className="fs-5 text-white text-decoration-none">木質</li>
          </Link>
          <Link to="/">
            <li className="fs-5 text-white text-decoration-none">花香調</li>
          </Link>
          <Link to="/">
            <li className="fs-5 text-white text-decoration-none">果香調</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Categories;
