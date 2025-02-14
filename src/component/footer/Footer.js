import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { UseGetAllServices } from "../../Hooks/service-Hooks/UseGetAllServices";
import { UseGetinformation } from "../../Hooks/OurInformation-Hooks/UseGetinformation";
import { UseSendEmailFooter } from "../../Hooks/Contact-Hooks/UseSendEmailFooter";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Footer = ({ parentClass }) => {
      const { t } = useTranslation();
  
  const [Services] = UseGetAllServices();
  const { social } = UseGetinformation();

  const { handelSend, setEmail } = UseSendEmailFooter();

  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <Link to={social.facebook}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={social.x}>
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to={social.linkedin}>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to={social.insta}>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">{t('footer.email.title')}</h2>
                  <p>
                  {t('footer.email.p')}
                  </p>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />
                      </span>
                      <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        className="form-control"
                        placeholder={t('footer.email.placeHolder')}
                      />
                      <button
                        onClick={handelSend}
                        className="subscribe-btn"
                        type="submit"
                      >
                        {t('footer.email.buttoun')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">{t('footer.srvices')}</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {Services.slice(0, 6).map((item, index) => (
                          <li key={index}>
                            <Link to={`/service/${item._id}`}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">{t('footer.Resources')}</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={"/blog"}>{t('header.blog')}</Link>
                        </li>
                        <li>
                          <Link to={"/portfolio"}>{t('header.porfolio')}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">{t('footer.support')}</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={"/contact"}>{t('header.contact')}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <a href="https://axilthemes.com/">Axilthemes</a>.
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={ "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </footer>
  );
};

export default Footer;
