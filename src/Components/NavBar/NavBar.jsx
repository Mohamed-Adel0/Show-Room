import React, { useState } from "react";
import Css from "./NavBar.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [setScroll, getScroll] = useState(false);
  const scrolla = () => {
    if (window.scrollY >= 654) {
      getScroll(true)
    } else {
      getScroll(false)
    }
  };
  window.addEventListener("scroll", scrolla);
  return (
    <div>
      <div className={`${Css.parent} ${setScroll? Css.show : ""}`}>
        <div className={Css.container}>
          <nav className={Css.text}>
            <h1>mø</h1>
            <ul>
              <li>
                <Link
                  target="_blank"
                  to="https://www.facebook.com/profile.php?id=100012706116123"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://github.com/Mohamed-Adel0">
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/mohamed-adel-226611286/"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
