import React from "react";
import { useTranslation } from "react-i18next";
import Tilty from "react-tilty";
import SectionTitle from "../sectionTitle/SectionTitle";

function AboutUsSix() {
  const { t } = useTranslation();

  const data = {
    image: "/images/icon/icon-2.png",
    title: "Development",
    description:
      "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.",
    process: {
      sectionSub: `${t("AboutUs:aboutSix.process.sectionSub")}`,
      sectionTitle: `${t("AboutUs:aboutSix.process.sectionTitle")}`,
      para: `${t("AboutUs:aboutSix.process.para")}`,
      steps: [
        {
          thumb: "/images/others/process-1.png",
          subtitle: `${t("AboutUs:aboutSix.process.steps.one.subtitle")}`,
          title: `${t("AboutUs:aboutSix.process.steps.one.title")}`,
          paragraph: `${t("AboutUs:aboutSix.process.steps.one.paragraph")}`,
        },
        {
          thumb: "/images/others/process-2.png",
          subtitle: `${t("AboutUs:aboutSix.process.steps.two.subtitle")}`,
          title: `${t("AboutUs:aboutSix.process.steps.two.title")}`,
          paragraph: `${t("AboutUs:aboutSix.process.steps.two.paragraph")}`,
        },
        {
          thumb: "/images/others/process-3.png",
          subtitle: `${t("AboutUs:aboutSix.process.steps.three.subtitle")}`,
          title: `${t("AboutUs:aboutSix.process.steps.three.title")}`,
          paragraph: `${t("AboutUs:aboutSix.process.steps.three.paragraph")}`,
        },
        {
          id: 4,
          thumb: "/images/others/process-4.png",
          subtitle: `${t("AboutUs:aboutSix.process.steps.four.subtitle")}`,
          title: `${t("AboutUs:aboutSix.process.steps.four.title")}`,
          paragraph: `${t("AboutUs:aboutSix.process.steps.four.paragraph")}`,
        },
      ],
    },
  };
  return (
    <div>
    <SectionTitle
                subtitle={data.process.sectionSub}
                title={data.process.sectionTitle}
                description={data.process.para}
                textAlignment=""
                textColor="mb--90"
              />
      <div className="container">
        {data.process.steps.map((data, index) => (
          <div
            key={index}
            className={`process-work ${
              index % 2 === 1 ? "content-reverse" : ""
            }`}
          >
            <Tilty perspective={2000}>
              <div className="thumbnail">
                <img src={data.thumb} alt="Thumbnail" />
              </div>
            </Tilty>
            <div className="content">
              <span className="subtitle">{data.subtitle}</span>
              <h3 className="title">{data.title}</h3>
              <p>{data.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsSix;
