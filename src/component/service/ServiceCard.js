import React from "react";
import { Link } from "react-router-dom";
import { trimString } from "../../utils";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ serviceStyle, items }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="col-lg-4 col-md-6 ">
        <div className={`services-grid ${serviceStyle}`}>
          <div className="thumbnail">
            <img src={items.imageCover} alt="icon" />
          </div>
          <div className="content">
            <h5 className="title">
              <Link to={`/service/${items._id}`}>
                {i18n.language === "en" ? items.name_en : items.name_ar}
              </Link>
            </h5>
			<p className="service-description">

            {i18n.language === "en"
              ? trimString(items.description_en)
              : trimString(items.description_ar)}
			  </p>


            <Link to={`/service/${items._id}`} className="more-btn">
			{t('Home:Service.findOut')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
