import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../image/logo.jpg";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

function Navbar({ changeLan }) {

  const { t } = useTranslation();
  const [toggle, setToggle] = useState(true);

  return (
    <div className="navbar">
      <div className="navBox">
        <h1 className="schoolName">
          <a href="https://shurchi3politexnikum.uz" className="schoolName">
            <img src={Logo} alt="Logo" />
            Sho'rchi Politexnika Texnikumi
          </a>
        </h1>
        <ul className="navItems">
          <li className="navItem">
            <NavLink to="">{t("nav.main")}</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="">Yo'nalishlar</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="leader">{t("nav.leader")}</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="teacher">{t("nav.teacher")}</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="contact">{t("nav.contact")}</NavLink>
          </li>

        </ul>
        <div className="menuIcon" onClick={() => setToggle(!toggle)}>
          <div className={toggle ? "bar1" : "bar1 change"}></div>
          <div className={toggle ? "bar2" : "bar2 change"}></div>
          <div className={toggle ? "bar3" : "bar3 change"}></div>
        </div>
      </div>
      <div className={toggle ? "mobileNav" : "mobileNav active"}>
        <ul className="mobileNavItems">
          <li className="navItem">
            <a href="#main" onClick={() => setToggle(!toggle)}>
              {t("nav.main")}
            </a>
          </li>
          <li className="navItem">
            <a href="#about" onClick={() => setToggle(!toggle)}>
              {t("nav.about")}
            </a>
          </li>
          <li className="navItem">
            <a href="#news" onClick={() => setToggle(!toggle)}>
              {t("nav.news")}
            </a>
          </li>
          <li className="navItem">
            <a href="#leadership" onClick={() => setToggle(!toggle)}>
              {t("nav.leader")}
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" onClick={() => setToggle(!toggle)}>
              {t("nav.contact")}
            </a>
          </li>
          {/* <li className="navItem language1" onClick={() => setLanguagesMenu(!languagesMenu)}>
            <img className="Uzb-1" src={imgSrc} alt="Uzb"></img>
            <div
              className={languagesMenu ? "languages1 act-sq1" : "languages1"}
            >
              <ul className="language-menu mobile-language">
                <li onClick={() => changeLan("Uz")}>
                  <img className="Uzb1" src={Uzb} alt="Uzb"></img>
                  
                </li>
                <li onClick={() => changeLan("Ru")}>
                  <img className="Rus" src={Rus} alt="Rus"></img>
                
                </li>
                <li onClick={() => changeLan("En")}>
                  <img className="Eng" src={UK} alt="Eng"></img>
                </li>
              </ul>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
