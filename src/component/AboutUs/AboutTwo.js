import React from "react";
import FormOne from "../Contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutTwo = () => {
      const { t } = useTranslation();
    

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <span className="subtitle">{t('AboutUs:AboutTwo.subtitle')}</span>
                <h3 className="title">{t('AboutUs:AboutTwo.tittle')}</h3>
                <p>
                {t('AboutUs:AboutTwo.p')}
                </p>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress />  {t('AboutUs:AboutTwo.Strategy')}
                  </Accordion.Header>
                  <Accordion.Body>
                  {t('AboutUs:AboutTwo.StrategyDescrip')}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCode /> {t('AboutUs:AboutTwo.Design')}
                  </Accordion.Header>
                  <Accordion.Body>
                  {t('AboutUs:AboutTwo.DesignDescrip')}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaGlobe /> {t('AboutUs:AboutTwo.Development')}
                  </Accordion.Header>
                  <Accordion.Body>
                  {t('AboutUs:AboutTwo.DevelopmentDescrip')}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">{t('Home:contact')}</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
