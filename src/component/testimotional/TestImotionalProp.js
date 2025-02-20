import React from "react";
import { useTranslation } from "react-i18next";

const TestimonialItem = ({ colSize }) => {
  const { t } = useTranslation();

  const data = [
    {
      fromtext: "Yelp",
      from: "/images/icon/yelp-2.png",
      description: `${t("Home:testimotional-opinion.one.description")}`,
      authorimg: "/images/testimonial/testimonial-1.png",
      authorname: "Darrell Steward",
      authordesig: "Executive Chairman",
    },
    {
      fromtext: "Google",
      from: "/images/icon/google-2.png",
      description: `${t("Home:testimotional-opinion.two.description")}`,
      authorimg: "/images/testimonial/testimonial-2.png",
      authorname: "Savannah Nguyen",
      authordesig: "Executive Chairman",
    },
    {
      fromtext: "Facebook",
      from: "/images/icon/fb-2.png",
      description: `${t("Home:testimotional-opinion.three.description")}`,
      authorimg: "/images/testimonial/testimonial-3.png",
      authorname: "Floyd Miles",
      authordesig: "Executive Chairman",
    },
  ];
  return (
    <>
      {data.map((data, index) => (
        <div className={`${colSize}`} key={index}>
          <div className="testimonial-grid">
            <span className="social-media">
              <img src={data.from} alt="Yelp" />
            </span>
            <p>{data.description}</p>
            <div className="author-info">
              <div className="thumb">
                <img src={data.authorimg} alt="Google Review" />
              </div>
              <div className="content">
                <span className="name">{data.authorname}</span>
                <span className="designation">{data.authordesig}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialItem;
