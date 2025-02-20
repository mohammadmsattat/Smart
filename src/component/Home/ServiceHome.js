import React from "react";
import { Link } from "react-router-dom";

import { UseGetAllServices } from "../../Hooks/service-Hooks/UseGetAllServices";
import { useTranslation } from "react-i18next";
import { trimString } from "../../utils";

const ServiceHome = () => {
  const{t,i18n}=useTranslation();
  const [Services] = UseGetAllServices();

  return (
    <>
      {Services.slice(0, 6).map((item, index) => (
        <div className="col-xl-4 col-md-6 " key={index}>
          <div className="services-grid ">
            <div className="thumbnail">
              <img src={item.imageCover} alt="icon" />
            </div>

            <div className="content">
              <h5 className="title">
                <Link to={`/service/${item._id}`}>{
                  i18n.language==='en'? item.name_en :item.name_ar
                }</Link>
              </h5>

              <p className="service-description">{
                i18n.language==='en'?trimString(item.description_en):trimString(item.description_ar)
              }</p>

              <Link to={`/service/${item._id}`} className="more-btn">
              {t('Home:Service.findOut')}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceHome;
