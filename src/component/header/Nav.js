import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/"}>Home </Link>   
                </li>
                <li className="menu-item-has-children">
                    <Link to="/service">Services </Link>   
                </li>
                <li className="menu-item-has-children">
                    <Link to="/portfolio">Portfolio </Link>  
                </li>
                <li className="menu-item-has-children">
                    <Link to="/aboutUs">AboutUs </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/blog">Blog </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/team">Team </Link>
                </li>
                <li className="menu-item-has-children">
                <Link to={ "/contact"}>Contact</Link>
                </li>
                
              
            </ul>
        </nav>
    )
}

export default Nav;