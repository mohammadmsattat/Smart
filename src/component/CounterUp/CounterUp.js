import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Counter from "./Counter";
import { useTranslation } from "react-i18next";

const CounterUp = () => {
  const { t } = useTranslation();

  return (
    <div className="section section-padding bg-color-dark">
      <div className="container">
        <SectionTitle
          subtitle={t("Home:counterUp.subtitle")}
          title={t("Home:counterUp.title")}
          description={t("Home:counterUp.description")}
          textAlignment="heading-light"
          textColor=""
        />
        <div className="row">
          <Counter colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
