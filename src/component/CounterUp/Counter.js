import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import TrackVisibility from "react-on-screen";

 

const Counter = ({ colSize, layoutStyle, evenTopMargin }) => {
  const { t } = useTranslation();


  const Data = [
    {
      id: 1,
      light_icon: "/images/icon/icon-7.png",
      dark_icon: "/images/icon/icon-10.png",
      countNum: 15,
      text: `${t("Home:counterUp.Years")}`,
    },
    {
      id: 2,
      light_icon: "/images/icon/icon-8.png",
      dark_icon: "/images/icon/icon-11.png",
      countNum: 360,
      text: `${t("Home:counterUp.Projects")}`,
    },
    {
      id: 3,
      light_icon: "/images/icon/icon-9.png",
      dark_icon: "/images/icon/icon-12.png",
      countNum: 600,
      text: `${t("Home:counterUp.Specialist")}`,
    },
    {
      id: 4,
      light_icon: "/images/icon/apple.png",
      dark_icon: "/images/icon/apple-black.png",
      countNum: 64,
      text: `${t("Home:counterUp.Years")}`,
    },
  ];
  return (
    <>
      {Data.map((data) => (
        <div
          className={`${colSize} ${data.id % 2 === 0 ? evenTopMargin : ""}`}
          key={data.id}
        >
          <div className={`counterup-progress ${layoutStyle}`}>
            {layoutStyle === "counterup-style-2" ? (
              <div className="icon">
                <img
                  className="dark-icon"
                  src={ data.dark_icon}
                  alt="Icon"
                />
                <img
                  className="light-icon"
                  src={ data.light_icon}
                  alt="Icon"
                />
              </div>
            ) : (
              <div className="icon">
                <img
                  src={ data.light_icon}
                  alt="Icon"
                />
              </div>
            )}

            <div className="count-number h2">
              <TrackVisibility once>
                {({ isVisible }) => (
                  <span className="number count">
                    {isVisible ? (
                      <CountUp end={data.countNum} duration={1} />
                    ) : null}
                  </span>
                )}
              </TrackVisibility>
              <span className="symbol">+</span>
            </div>
            <h6 className="title">{data.text}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter;
