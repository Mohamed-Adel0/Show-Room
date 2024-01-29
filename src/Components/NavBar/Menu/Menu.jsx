import React, { useState } from "react";
import { Link } from "react-router-dom";
import Css from "./Menu.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
const Menu = () => {
  const [setMenu, getMenu] = useState(false);
  //   const [setClose, getClose] = useState(false);

  return (
    <div className={Css.abb}>
      <header className={Css.parent}>
        <nav className={Css.container}>
          <div className={Css.menu}>
            <button onClick={() => getMenu(!setMenu)}>
              <CiMenuBurger />
            </button>
          </div>
          <div className={Css.model}>
            <h3>
              <div className={Css.bar}>
                <div className={Css.color}></div>
              </div>{" "}
              © 2024,Mo THEME BY Mohamed-Adel{" "}
            </h3>
          </div>
          <div className={Css.share}>
            <h3>Share</h3>
            <button>
              <GoPlus />
            </button>
          </div>
        </nav>
        <div className={`${Css.navbar} ${setMenu ? Css.back : ""}`}>
          <div className={Css.descraption}>
            <h4>Show Room</h4>
            <button onClick={() => getMenu(false)}>X</button>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="content">View Project</Link>
            </li>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#thebrief">The Brief</a>
            </li>
            <li>
              <a href="#Usage">Usage</a>
            </li>
          </ul>
          <div className={Css.info}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              quae saepe accusantium rem maxime magnam rerum totam. Sint
              inventore numquam fugiat consectetur fuga. Qui perspiciatis iste
              rem magnam. Iste, aut.
            </p>
            <div className={Css.icons}>
              <button>
                <FaFacebookF />
              </button>
              <button>
                <FaGithub />
              </button>
              <button>
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Menu;
