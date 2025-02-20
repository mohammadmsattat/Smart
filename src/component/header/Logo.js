import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/public/logo.png'


const Logo = () => {
  return (
    <div>
    <Link to={"/"}>
      <img
        className="light-version-logo"
        style={{width:'2.5em'}}
        src={logo}
        alt="logo"
      />
      <img
        className="dark-version-logo"
        style={{width:'2.5em'}}
        src={logo}
        alt="logo"
      />
      <img
        className="sticky-logo"
        style={{width:'2.5em'}}
        src={logo}
        alt="logo"
      />
    </Link>
    </div>
  );
};

export default Logo;
