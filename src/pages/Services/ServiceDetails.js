import React from "react";
import { useParams } from "react-router-dom";
import DescripSection from "../../component/descripSection/DescripSection";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import ContactUsSectoin from "../../component/Contact/ContactUsSection";
import AboutTwo from "../../component/AboutUs/AboutTwo";
import { UseGetOneService } from "../../Hooks/service-Hooks/UseGetOneService";
import ComingSoon from "../commingSoon/ComingSoon";
import AboutUsSix from "../../component/AboutUs/AboutUsSix";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
    const { i18n } = useTranslation();
  

  const { id } = useParams();
  const [service] = UseGetOneService(id);


  return (
    <>
      {service.commingSoon?<ComingSoon img={service.imageCover}/>:(<main className="main-wrapper">
        <DescripSection
          title={i18n.language==='en'?service.name_en :service.name_ar}
          paragraph={i18n.language==='en'?service.description_en :service.description_ar}
          styleClass=""
          mainThumb="/images/banner/banner-thumb-4.png"
        />
        <AboutTwo />

        <div className="section section-padding bg-color-light pb--70">
          
          <AboutUsSix/>
          <ul className="shape-group-17 list-unstyled">
            <li className="shape shape-1">
              <img
                src={ "/images/others/bubble-24.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={ "/images/others/bubble-23.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={ "/images/others/line-4.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-4">
              <img
                src={"/images/others/line-5.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-5">
              <img
                src={ "/images/others/line-4.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-6">
              <img
                src={"/images/others/line-5.png"}
                alt="Line"
              />
            </li>
          </ul>
        </div>
        <div className="section section-padding">
          <div className="container">
            <SectionTitle
              subtitle="Our Project"
              title="Featured Designs"
              description=""
              textAlignment=""
              textColor=""
            />
            <div className="row row-35">
              {/* {getProjectData.slice(0, 2).map((data) => (
                            <div className="col-md-6" key={data.id}>
                                <ProjectCard  project={data}/>
                            </div>
                        ))} */}
            </div>
          </div>
          <ul className="shape-group-16 list-unstyled">
            <li className="shape shape-1">
              <img
                src={ "/images/others/circle-2.png"}
                alt="circle"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={ "/images/others/bubble-1.png"}
                alt="Line"
              />
            </li>
          </ul>
        </div>
        <ContactUsSectoin />
      </main>
)}    </>
  );
};

export default ServiceDetails;
