import React from "react";
import { useEffect, useState } from "react";
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

      <div className="wrap m-auto">
        <section className="bestseller">
          <div className="d-flex flex-column ">
            <div className="d-sm-flex flex-sm-row-reverse align-items-center justify-content-sm-between mb-4 mb-sm-0">
              <div className="flex-1">
                <img
                  src="images/g3ew7lob.png"
                  alt="Gabrielle_CHANEL-image"
                  className="bestseller-img mw-100 object-fit"
                />
              </div>

              <div className="bestseller-card flex-1 m-auto ">
                <h2 className="fw-bold ">Gabrielle CHANEL</h2>
                <p className="bestseller-text fs-5">
                  全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。
                  極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
                </p>
                <span className="text-primary fw-semibold">查看更多</span>
              </div>
            </div>

            <div className="d-sm-flex align-items-center  justify-content-sm-between mb-4 mb-sm-0">
              <div className="flex-1">
                <img
                  src="images/Five_Oclock (555 x 555 px).png"
                  alt="Five_O’clock_Au_Gingembre-image"
                  className="bestseller-img mw-100 object-fit"
                />
              </div>
              <div className="flex-1 m-auto">
                <h2 className="fw-bold">Five O’clock Au Gingembre</h2>
                <p className="bestseller-text fs-5">
                  生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
                </p>
                <span className="text-primary fw-semibold">查看更多</span>
              </div>
            </div>

            <div className="d-sm-flex flex-sm-row-reverse align-items-center justify-content-sm-between mb-4 mb-sm-0">
              <div className="flex-1">
                <img
                  src="images/gvjxokum.png"
                  alt="CHANEL_N°5-image"
                  className="bestseller-img mw-100 object-fit"
                />
              </div>
              <div className="flex-1 m-auto">
                <h2 className="fw-bold">CHANEL N°5</h2>
                <p className="bestseller-text fs-5">
                  N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
                </p>
                <span className="text-primary fw-semibold">查看更多</span>
              </div>
            </div>
          </div>
        </section>

        <section className="d-md-flex ">
          <div className="training-banner flex-1">
            <img
              src="https://images.unsplash.com/photo-1542038382126-77ae2819338d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="training-image"
              className="training-image mw-100 object-fit"
            />
          </div>
          <ul className="training-list d-flex flex-column p-0 flex-1 px-md-3 px-lg-0 justify-content-lg-evenly gap-lg-5">
            <li className="mb-3 mt-2">
              <h6 className="fs-4 fw-semibold">
                1.
                <br />
                Levels of Preventive Maintenance Compliance
              </h6>
              <p className="mb-1 fw-light">
                The core idea of preventative maintenance is the performance of
                proactive actions against unscheduled downtime in order to
                identify potential defects before they evolve into something
                more severe.
              </p>
            </li>
            <li className="mb-3">
              <h6
                className="fs-4 fw-semibold
              "
              >
                2.
                <br />
                Percentage of Planned Maintenance
              </h6>
              <p className="mb-1 fw-light">
                The planned maintenance percentage is the total planned
                maintenance time in your CMMS software over a date range over
                the total number of hours of a service performed by the
                technicians.
              </p>
            </li>
            <li className="mb-3">
              <h6
                className="fs-4 fw-semibold
              "
              >
                3.
                <br />
                Critical percentage of planned maintenance
              </h6>
              <p className="mb-1 fw-light">
                Calculating the critical percentage of planned maintenance will
                help you prioritize the most important operations that should be
                performed immediately.
              </p>
            </li>
            <Link to="/" className="">
              <button className="training-button rounded-pill border border-2 border-black bg-transparent w-100 m-auto">
                <span className="fs-5 fw-medium d-inline-block p-3 px-lg-0">
                  Plan a free online training
                </span>
              </button>
            </Link>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Home;
