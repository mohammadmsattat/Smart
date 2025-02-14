import React from "react";
import DescripSection from "../../component/descripSection/DescripSection";
import SEO from "../../component/SEO";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import AboutThree from "../../component/AboutUs/AboutThree";
import ContactUsSectoin from "../../component/Contact/ContactUsSection";
import CounterUpData from "../../component/CounterUp/CounterUpData";

import ServiceCard from "../../component/service/ServiceCard";

import { UseGetAllServices } from "../../Hooks/service-Hooks/UseGetAllServices";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
      const { t } = useTranslation();
  
  const [services] = UseGetAllServices();

  return (
    <>
      <SEO title="Service Two" />

      <main className="main-wrapper">
        <DescripSection
          title={t('Service:Head.title')}
          paragraph={t('Service:Head.paragraph')}
          styleClass=""
          mainThumb="/images/banner/banner-thumb-4.png"
        />
        <CounterUpData />
        <div className="section section-padding bg-color-light">
          <div className="container">
            <SectionTitle
              subtitle={t('Service:services.subtitle')}
              title={t('Service:services.title')}
              description=""
              textAlignment="heading-left"
              textColor=""
            />
            <div className="row">
              {services.map((item, index) => {
                return (
                  <ServiceCard
                    key={index}
                    serviceStyle="service-style-2"
                    items={item}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <AboutThree />

        <ContactUsSectoin />
      </main>
    </>
  );
};

export default ServicePage;
