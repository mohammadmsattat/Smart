import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutFive = () => {
    const { t } = useTranslation();

  return (
    <div className="section-padding-equal">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-team">
              <div className="thumbnail">
                <img
                  src={ "/images/about/about-2.png"}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-team">
              <div className="section-heading heading-left">
                <span className="subtitle">{t('AboutUs:aboutfive.subtitle')}</span>
                <h2>{t('AboutUs:aboutfive.tittle')}</h2>
                <p>
                {t('AboutUs:aboutfive.p')}
                </p>
                <Link
                  to="/team"
                  className="axil-btn btn-large btn-fill-primary"
                >
                 {t('AboutUs:aboutfive.buttoun')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
