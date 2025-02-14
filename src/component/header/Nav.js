import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";


const Nav = () => {
    const { t, i18n } = useTranslation();

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    //   };
    

    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
         
                <li className="menu-item-has-children">
                    <Link to={ "/"}>{t('header.hmoe')} </Link>   
                </li>
                <li className="menu-item-has-children">
                    <Link to="/service">{t('header.service')} </Link>   
                </li>
                <li className="menu-item-has-children">
                    <Link to="/portfolio">{t('header.porfolio')} </Link>  
                </li>
                <li className="menu-item-has-children">
                    <Link to="/aboutUs">{t('header.adoutus')} </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/blog">{t('header.blog')} </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/team">{t('header.team')} </Link>
                </li>
                <li className="menu-item-has-children">
                <Link to={ "/contact"}>{t('header.contact')}</Link>
                </li>
                
              
            </ul>
        </nav>
    )
}

export default Nav;