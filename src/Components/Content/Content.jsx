import React from "react";
import Css from "./Content.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaLink } from "react-icons/fa6";
import Intro from "./Intro/Intro";
import Products from "./Products/Products";
import TheBrief from "./TheBrief/TheBrief";
import Usage from "./Usage/Usage";
import Footer from "../Footer/Footer";
const Content = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.box_container}>
          <div className={Css.container}>
            <div className={Css.card}>
              <div className={Css.back}>
                <Link to="/">
                  <FaArrowLeftLong /> Back
                </Link>
              </div>
              <button>DESIGN</button>
              <h1 className="animate__animated animate__bounce animate__slow animate__zoomInDown">
                Hotel Scandic Continental Möbler
              </h1>
              <div
                className={`${Css.info} animate__animated animate__bounce animate__slower animate__zoomIn`}
              >
                <p>DATE :January 26, 2024</p>
                <p>SKILLS :React, CSS</p>
                <p>CLIENT :COLABRIO TEAM</p>
                <Link
                  target="_blank"
                  to="https://portfolio97by-mohamed-adel.netlify.app/"
                >
                  Portfolio <FaLink />
                </Link>
              </div>
              <div className={Css.scroll}>
                <h5>
                  <div className={Css.bar}></div> Scroll
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <Products />
      <TheBrief />
      <Usage />
      <Footer />
    </div>
  );
};

export default Content;
