import React, { useState } from "react";
import { Link } from "react-dom";
import { useNavigate } from "react-router-dom";
import "./header.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AiOutlineShop } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fs-5">
        <Container className="d-flex justify-content-between px-3">
          <Navbar.Brand href="/">
            <img
              src="images/d’Perfume.png"
              alt="brand-logo"
              className="img-fluid"
              style={{ height: "38px" }}
            />
          </Navbar.Brand>

          <div>
            <IoMdCart className="fs-5 text-secondary d-inline-block m-2 cart-icon" />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="ms-auto outline-0 border-0 p-2"
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link
                href="#products"
                className="d-flex justify-content-center align-items-center text-lg-primary"
                onClick={() => navigate("/products")}
              >
                <AiOutlineShop className="me-1 d-none d-lg-block" />
                Product
              </Nav.Link>
              <Nav.Link
                href="#login"
                className="d-none d-lg-block d-flex justify-content-center align-items-center text-lg-primary"
              >
                <IoPersonSharp className="mb-1 me-1" />
                log in
              </Nav.Link>
              <Nav.Link
                href="#wishlist"
                className="d-flex justify-content-center align-items-center text-lg-primary"
                onClick={() => navigate("/wishlist")}
              >
                <FaHeart className="me-1 d-none d-lg-block" />
                Wishlist
              </Nav.Link>
              <Nav.Link
                href="#cart"
                className="d-none d-lg-block d-flex align-items-center  text-lg-primary"
              >
                <IoMdCart className="mb-1 me-1" />
                Cart
              </Nav.Link>
              <Nav.Link
                href="#blog"
                className="d-block d-lg-none text-lg-primary"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="d-block d-lg-none text-lg-primary"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#login"
                className="d-block d-lg-none text-lg-primary"
              >
                log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
