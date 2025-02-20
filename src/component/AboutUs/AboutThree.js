import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";

const AboutThree = () => {
  const { t } = useTranslation();
  const Datas = [
    {
      id: 1,
      title: `${t("Service:Data.one.title")}`,
      para: `${t("Service:Data.one.para")}`,
    },
    {
      id: 2,
      title:`${t("Service:Data.two.title")}`,
      para: `${t("Service:Data.two.para")}`,
    },
    {
      id: 3,
      title:`${t("Service:Data.three.title")}`,
      para: `${t("Service:Data.three.para")}`,
    },
    {
      id: 4,
      title: `${t("Service:Data.four.title")}`,
      para: `${t("Service:Data.four.para")}`,
    },
    {
      id: 5,
      title: `${t("Service:Data.five.title")}`,
      para: `${t("Service:Data.five.para")}`,
    },
  ];

  return (
    <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
      <div className="container">
        <SectionTitle
          subtitle={t("Service:Data.subtitle")}
          title={t("Service:Data.title")}
          description={t("Service:Data.description")}
          textAlignment="heading-left heading-light-left mb--100"
          textColor=""
        />

        <div className="row">
          {Datas.map((data) => (
            <div className="col-lg-4" key={data.id}>
              <div className="about-quality">
                <h3 className="sl-number">{data.id}</h3>
                <h5 className="title">{data.title}</h5>
                <p>{data.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
            alt="Circle"
          />
        </li>
      </ul>
    </div>
  );
};

export default AboutThree;
