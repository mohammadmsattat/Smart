import React from "react";
import { Link, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";
import DiscripProduct from "../../component/descripSection/DiscripProduct";

import ContactUsSectoin from "../../component/Contact/ContactUsSection";
import { UseGetOneProject } from "../../Hooks/project-Hooks/UseGetOneProject";
import ComingSoon from "../commingSoon/ComingSoon";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const { t,i18n } = useTranslation();

  const { id } = useParams();
  const [project] = UseGetOneProject(id);
  console.log(project.commingSoon);

  return (
    <>
      {project.commingSoon?<ComingSoon img={project.imageCover}/>:(<main className="main-wrapper">
        <DiscripProduct
          title={i18n.language==='en'?project.name_en :project.name_ar}
          paragraph={i18n.language==='en'?project.description_en :project.description_ar}
          mainThumb={project.imageCover}
        />
        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-heading heading-left mb-0">
                  <h3 className="title">{i18n.language==='en'?project.name_en :project.name_ar}</h3>
                </div>
                {i18n.language==='en'?project.description_en :project.description_ar}
                
              </div>
              <div className="col-lg-6 offset-xl-1">
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
            </div>              </div>
            </div>
          </div>
        </section>
        <ContactUsSectoin />
      </main>)}
    </>
  );
};

export default ProjectDetails;
