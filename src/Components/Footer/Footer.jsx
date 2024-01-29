import React from "react";
import Css from "./Footer.module.css";
import { ImLocation } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import banner1 from "../Picture/dm29__projects_01-min.jpg";
import banner2 from "../Picture/dm29__projects_02-min.jpg";
import banner3 from "../Picture/dm29__projects_03-min.jpg";
import banner4 from "../Picture/dm29__projects_04-min.jpg";
import banner5 from "../Picture/dm29__projects_05-min.jpg";
import banner6 from "../Picture/nor_portfolio_item__26.jpg";
import banner7 from "../Picture/nor_portfolio_item__27.jpg";
import banner8 from "../Picture/nor_portfolio_item__28.jpg";
import banner9 from "../Picture/dm29__projects_01-min.jpg";
import banner10 from "../Picture/nor_portfolio_item__29.jpg";
import banner11 from "../Picture/nor_portfolio_item__30.jpg";
import banner12 from "../Picture/dm29__projects_03-min.jpg";

const Footer = () => {
  const img = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
    {
      id: 6,
      image: banner6,
    },
    {
      id: 7,
      image: banner7,
    },
    {
      id: 8,
      image: banner8,
    },
    {
      id: 9,
      image: banner9,
    },
    {
      id: 10,
      image: banner10,
    },
    {
      id: 11,
      image: banner11,
    },
    {
      id: 12,
      image: banner12,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.cards} data-aos="fade-right">
            <div className={Css.card}>
              <h4>CONTACT US</h4>
              <p>
                <ImLocation /> 8th floor, 379 Hudson St, New York, NY 10018
              </p>
              <p>
                <IoIosCall /> (+20) 01117189056
              </p>
              <p>
                <CgMail /> howare7amo99@gmail.com
              </p>
            </div>
            <div className={Css.card}>
              <h4>OPENING TIMES</h4>
              <p>09:30 AM - 11:00 PM</p>
              <p>Every Day</p>
            </div>
          </div>
          <div
            className={Css.cards}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={Css.card}>
              <h4>Subscribe Our Newsletter</h4>
              <p>I can work on other projects, as I am working on that</p>
              <p> with passion. If you want to work on a project, please </p>
              <p>contact me</p>
            </div>
            <div className={Css.card}></div>
          </div>
          <div className={Css.cards} data-aos="fade-left">
            <div className={Css.cardx}>
              <h4>GALLERY</h4>
            </div>
            <div className={Css.cardx}>
              {img?.map((item) => (
                <div className={Css.img} key={item.id}>
                  <img src={item.image} alt="" />
                  <div className={Css.bg}></div>
                </div>
              ))}
            </div>
            <div className={Css.cardx}></div>
          </div>
        </div>
        <footer>
          <div className={Css.containerfooter}>
            <div className={Css.icons}>
              <h4>
                Copyright ©2024 All rights reserved | This template is made with
                by <span>Mohamed-adel</span>
              </h4>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
