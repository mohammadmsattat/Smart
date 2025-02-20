import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Introduction = () => {
        const { t } = useTranslation();
    
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-content">
            
                <h1 className="title">
                {t('Home:introduction.header')}
                 
                </h1>
                <span className="subtitle">
                {t('Home:introduction.description')}
                 
                </span>
                <Link
                  to={"/contact"}
                  className="axil-btn btn-fill-primary btn-large"
                >
                {t('Home:introduction.button')}
                </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
           
                <div className="large-thumb">
                  <img
                    src={ "/images/banner/window.png"}
                    alt="Laptop"
                  />
                </div>
            
                <div className="large-thumb-2">
                  <img
                    src={
                       "/images/banner/laptop-poses.png"
                    }
                    alt="Laptop"
                  />
                </div>
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
               
                    <img
                      src={
                         "/images/banner/chat-group.png"
                      }
                      alt="chat"
                    />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            src={ "/images/others/bubble-39.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={"/images/others/bubble-38.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={ "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={ "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={ "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={ "/images/others/bubble-40.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={ "/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default Introduction;
