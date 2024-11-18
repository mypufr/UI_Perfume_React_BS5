import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <>
      <div>Home</div>

      {/* <Button>Button</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}


      {/* <nav className="container flex py-9">
        <Link to="#" 
        className="logo-link">
        <img src="images/d’Perfume.png" alt="logo"
      /></Link>
        <div>
          <Link to="#" className="sm-d-cart">
          
            <span className="material-symbols-outlined text-secondary"
              >shopping_cart</span>
       
          </Link>
          <Link className="burger-menu-toggler">
            <span className="material-symbols-outlined">menu</span>
          </Link>
        </div>
        <ul className="nav-items">
            <Link to="#">
          <li className="nav-item fz-20">
            <span className="material-symbols-outlined text-secondary">store</span>
            Product 
          </li>
          </Link>




            <Link to="#">
          <li className="nav-item fz-20">
            <span className="material-symbols-outlined text-secondary">person</span>
            log in 
          </li>
          </Link>


            <Link to="#">
          <li className="nav-item fz-20 lg-d-none">
            
            <span className="material-symbols-outlined text-secondary">person</span>
            Blog 
          </li>
          </Link>
          <Link to="#">
          <li className="nav-item fz-20 lg-d-none">
        
            <span className="material-symbols-outlined text-secondary">person</span>
            Contact
          </li>
          </Link>
          <Link to="#">
          <li className="nav-item fz-20">
          
            <span className="material-symbols-outlined text-secondary">favorite</span>
            Wishlist
         
          </li>
          </Link>
          <Link to="#">
          <li className="nav-item fz-20 sm-d-none">
          
            <span className="material-symbols-outlined text-secondary sm-d-none"
              >shopping_cart
              </span >
              Cart(3)
      
          </li>
          </Link>
        </ul>
      </nav>
      <section className="shop-introduction">
        <div className="introduction-container">
          <img
            src="https://images.unsplash.com/photo-1588159343745-445ae0b16383?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="intro-image"
            className="intro-image"
          />
          <div className="intro-description">
            <h1 className="fz-40">Perfume your day</h1>
            <p>
              A perfume is like a piece of clothing, a message, a way of
              presenting oneself a costume that according to the person who
              wears it.
            </p>
       
              <Link to="*" className="shop-button">Shop now</Link>
      
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="bestseller container mt-60">
          <ul>
            <li className="flex flex-reverse">
              <img src="images/g3ew7lob.png" alt="Gabrielle_CHANEL-image" />
              <div className="bestseller-text">
                <h2 className="sm-mt-8">Gabrielle CHANEL</h2>
                <p className="fz-20">
                  全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。
                  極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
                </p>
                <span>查看更多</span>
              </div>
            </li>
            <li className="flex sm-flex-col">
              <img
                src="images/Five_Oclock (555 x 555 px).png"
                alt="Five_O’clock_Au_Gingembre-image"
              />
              <div className="bestseller-text">
                <h2 className="sm-mt-8">Five O’clock Au Gingembre</h2>
                <p className="fz-20">
                  生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
                </p>
                <span>查看更多</span>
              </div>
            </li>
            <li className="flex flex-reverse">
              <img src="images/gvjxokum.png" alt="CHANEL_N°5-image" />
              <div className="bestseller-text">
                <h2 className="sm-mt-8">CHANEL N°5</h2>
                <p className="fz-20">
                  N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
                </p>
                <span>查看更多</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="maintenance-training container flex">
          <div className="training-banner">
            <img
              src="https://images.unsplash.com/photo-1542038382126-77ae2819338d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="training-image"
              className="training-image"
            />
          </div>
          <ul className="training-list">
            <li className="mb-52 sm-mt-8">
              <h6 className="sm-mb-4">
                1.
                <br />
                Levels of Preventive Maintenance Compliance
              </h6>
              <p>
                The core idea of preventative maintenance is the performance of
                proactive actions against unscheduled downtime in order to
                identify potential defects before they evolve into something
                more severe.
              </p>
            </li>
            <li className="mb-52 sm-mt-8">
              <h6 className="sm-mb-4">
                2.
                <br />
                Percentage of Planned Maintenance
              </h6>
              <p>
                The planned maintenance percentage is the total planned
                maintenance time in your CMMS software over a date range over
                the total number of hours of a service performed by the
                technicians.
              </p>
            </li>
            <li className="sm-mt-8">
              <h6 className="sm-mb-4">
                3.
                <br />
                Critical percentage of planned maintenance
              </h6>
              <p>
                Calculating the critical percentage of planned maintenance will
                help you prioritize the most important operations that should be
                performed immediately.
              </p>
            </li>
            <Link to="#" className="training-button mt-60">
     
                Plan a free online training
      
            </Link>
          </ul>
        </section>
      </div>
      <section className="series mt-60">
        <div className="container">
          <ul className="series-list">
            <li className="series_list-item">
              <img
                src="images/photo-1530630458144-014709e10016.png"
                alt="Poppy_&_Barley-image"
              />
              <h3>Poppy & Barley</h3>
              <p className="mb-16 sm-mb-4">Jo Malone</p>
              <p className="inline-block">NT$1.380</p>
              <span className="inline-block">NT$ 1580</span>
            </li>

            <li className="series_list-item">
              <img
                src="images/photo-1556228720-da4e85f25e15.png"
                alt="Body_Wash-image"
              />
              <h3>Body Wash</h3>
              <p className="mb-16 sm-mb-4">Curology</p>
              <p>NT$1,580</p>
            </li>

            <li className="series_list-item">
              <div className="sold_out-item sold-out">
                <img
                  src="images/photo-1559264730-1533a6ec0433.png"
                  alt="Apple_Cider_Vinegar_Capsule-image"
                  className="opacity"
                />
              </div>
              <h3>Apple Cider Vinegar Capsule</h3>
              <p className="mb-16 sm-mb-4">Tonik</p>
              <p>NT$1,580</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="wrap">
        <section className="recycle-info container mt-60">
          <img
            src="https://images.unsplash.com/photo-1594913615593-e4b8c44625be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="recycle-image"
            className="recycle-image"
          />

          <div className="recycle-text">
            <h5>Bottle-Recycling</h5>
            <p className="fz-20 mb-16">
              Recycle your used empty bottles and be rewareded
            </p>
            <p className="mb-16">
              For the past 10 years, we have collected over 800,000 bottles
              through Empty Bottle Recycling Campaign and planted more than 860
              pine trees for a better environment.For the past 10 years, we have
              collected over 800,000 bottles through Empty Bottle Recycling
              Campaign and planted more than 860 pine trees for a better
              environment.
            </p>
            <span>查看更多</span>
          </div>
        </section>
      </div> */}



      {/* <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div> */}
    </>
  );
}

export default Home;
