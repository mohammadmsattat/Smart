import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import { useTranslation } from "react-i18next";

const CounterUpData = () => {
  const { t } = useTranslation();

  return (
    <div className="section section-padding expert-counterup-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-heading heading-left">
              <span className="subtitle">{t("Service:counter.subtitle")}</span>
              <h2>{t("Service:counter.title")}</h2>
              <p className="mb--50">{t("Service:counter.p")}</p>
              <Link
                to={"/contact"}
                className="axil-btn btn-large btn-fill-primary"
              >
                {t("Service:counter.button")}
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="row">
              <Counter
                colSize="col-sm-6"
                layoutStyle="counterup-style-2"
                evenTopMargin=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUpData;
