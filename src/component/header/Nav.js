import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Nav = () => {
  const { t, i18n } = useTranslation();

  // set language in loading
  useEffect(() => {
    document.documentElement.lang = i18n.language; // Set `lang` in <html>
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr"; // Set direction
    if (i18n.language === "ar")
      document.querySelector("html").classList.add("RTL");
    if (i18n.language === "en")
      document.querySelector("html").classList.remove("RTL");
  }, [i18n.language]);

  const RTLLanguage = () => {
    changeLanguage("ar");
  };

  const LTRLanguage = () => {
    changeLanguage("en");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="menu-item-has-children">
          <Link to={"/"}>{t("header.hmoe")} </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/service">{t("header.service")} </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/portfolio">{t("header.porfolio")} </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/aboutUs">{t("header.adoutus")} </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/blog">{t("header.blog")} </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to="/team">{t("header.team")} </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={"/contact"}>{t("header.contact")}</Link>
        </li>
        <li className="menu-item-has-children">
          <DropdownButton title={t("language.language")}>
            <Dropdown.Item onClick={LTRLanguage}>
              {t("language.english")}
            </Dropdown.Item>
            <Dropdown.Item onClick={RTLLanguage}>
              {t("language.Arabic")}{" "}
            </Dropdown.Item>
          </DropdownButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
