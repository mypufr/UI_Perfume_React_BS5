import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.scss";

function Home() {
  return (
    <>
      <section className="position-relative">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1588159343745-445ae0b16383?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="intro-image"
            className="banner-img img-fluid object-fit-cover"
          />
          <div className="position-absolute start-50 translate-middle intro-text">
            <h1 className="banner-title">Perfume your day</h1>
            <p className="banner-text">
              A perfume is like a piece of clothing, a message, a way of
              presenting oneself a costume that according to the person who
              wears it.
            </p>

            <Link to="/products" className="text-decoration-none shop-link">
              <button className="bg-transparent text-white border border-2 border-white rounded-pill w-100">
                <span className="d-inline-block py-1">Shop now</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap m-auto mt-9 mt-xxl-10">
        <section className="bestseller">
          <div className="d-flex flex-column">
            <div className="d-sm-flex flex-sm-row-reverse align-items-center justify-content-sm-between mb-4 mb-sm-0">
              <div className="flex-1">
                <img
                  // src="images/g3ew7lob.png"
                  src="https://i.imgur.com/hxuu1CO.png"
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
                <Link className="text-decoration-none">
                  <span className="text-primary fw-semibold">查看更多</span>
                </Link>
              </div>
            </div>

            <div className="d-sm-flex align-items-center  justify-content-sm-between mb-4 mb-sm-0">
              <div className="flex-1">
                <img
                  // src="images/Five_Oclock (555 x 555 px).png"
                  src="https://i.imgur.com/Z6Dhlbd.png"
                  alt="Five_O’clock_Au_Gingembre-image"
                  className="bestseller-img mw-100 object-fit"
                />
              </div>
              <div className="bestseller-card flex-1 m-auto">
                <h2 className="fw-bold">Five O’clock Au Gingembre</h2>
                <p className="bestseller-text fs-5">
                  生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
                </p>
                <Link className="text-decoration-none">
                  <span className="text-primary fw-semibold">查看更多</span>
                </Link>
              </div>
            </div>

            <div className="d-sm-flex flex-sm-row-reverse align-items-center justify-content-sm-between mb-4 mb-sm-0">
              <div className="flex-1">
                <img
                  // src="images/gvjxokum.png"
                  src="https://i.imgur.com/vFsqARO.png"
                  alt="CHANEL_N°5-image"
                  className="bestseller-img mw-100 object-fit"
                />
              </div>
              <div className="bestseller-card flex-1 m-auto">
                <h2 className="fw-bold">CHANEL N°5</h2>
                <p className="bestseller-text fs-5">
                  N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
                </p>
                <Link className="text-decoration-none">
                  <span className="text-primary fw-semibold">查看更多</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="d-md-flex mt-8 mt-md-0">
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
              <h6 className="fs-4 fw-semibold">
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
            <Link to="/">
              <button className="training-button rounded-pill border border-2 border-black bg-transparent w-100 m-auto">
                <span className="fs-5 fw-medium d-inline-block p-3 px-lg-0">
                  Plan a free online training
                </span>
              </button>
            </Link>
          </ul>
        </section>
      </div>

      <section className="bg-light my-9 my-xxl-10 ">
        <div className="series-wrap">
          <div className="series-list d-flex flex-column justify-content-center align-items-center gap-4 flex-xl-row pt-8 pb-9 pt-md-9 px-md-1">
            <div className="series_list-item">
              <img
                // src="images/photo-1530630458144-014709e10016.png"
                src="https://i.imgur.com/9MjnVbh.png"
                alt="Poppy_&_Barley-image"
                className="object-fit"
              />
              <h3 className="fs-4 mb-0 mt-2">Poppy & Barley</h3>
              <p className="mb-0">Jo Malone</p>
              <div className="d-flex gap-2">
                <p>NT$1.380</p>
                <span className="text-decoration-line-through text-secondary">
                  NT$ 1580
                </span>
              </div>
            </div>

            <div className="series_list-item">
              <img
                // src="images/photo-1556228720-da4e85f25e15.png"
                src="https://i.imgur.com/aA9iz48.png"
                alt="Body_Wash-image"
                className="object-fit-cover"
              />
              <h3 className="fs-4 mb-0 mt-2">Body Wash</h3>
              <p className="mb-0 mb-0">Curology</p>
              <p>NT$1,580</p>
            </div>

            <div className="series_list-item">
              <div className="sold_out-item sold-out">
                <img
                  // src="images/photo-1559264730-1533a6ec0433.png"
                  src="https://i.imgur.com/V0SJ1js.png"
                  alt="Apple_Cider_Vinegar_Capsule-image"
                  className="opacity-50 img-fluid object-fit"
                />
              </div>
              <h3 className="fs-4 mb-0 mt-2">Apple Cider Vinegar Capsule</h3>
              <p className="mb-0">Tonik</p>
              <p>NT$1,580</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-9 my-xxl-10 px-xl-0">
        <section className="recycle-info mt-60 d-lg-flex justify-content-lg-center align-items-lg-center">
          <div className="recycle-banner flex-1"></div>

          <div className="recycle-text flex-1 ">
            <h5 className="fs-2 fw-bold pt-2">Bottle-Recycling</h5>
            <p className="fs-5 fw-semibold mb-2">
              Recycle your used empty bottles and be rewareded
            </p>
            <p className="fw-light">
              For the past 10 years, we have collected over 800,000 bottles
              through Empty Bottle Recycling Campaign and planted more than 860
              pine trees for a better environment.For the past 10 years, we have
              collected over 800,000 bottles through Empty Bottle Recycling
              Campaign and planted more than 860 pine trees for a better
              environment.
            </p>
            <Link className="text-decoration-none">
              <span className="text-primary fw-semibold">查看更多</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
