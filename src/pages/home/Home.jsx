import React from "react";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import "./home.scss";
import Button from "react-bootstrap/Button";

function Home() {



  return (
    <>
      <section className="position-relative">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1588159343745-445ae0b16383?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="intro-image"
            className="banner-img img-fluid object-fit-cover"
   
          />
          <div className="position-absolute start-50 translate-middle intro-text">
            <h1 className="">Perfume your day</h1>
            <p className="">
              A perfume is like a piece of clothing, a message, a way of
              presenting oneself a costume that according to the person who
              wears it.
            </p>

            <Link to="/products" className="text-decoration-none shop-link">
              <button className="bg-transparent text-white border border-2 border-white rounded-pill w-100">
               <span className="d-inline-block py-1"> Shop now</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
