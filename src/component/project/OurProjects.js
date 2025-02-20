import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import { UseGetAllProjects } from "../../Hooks/project-Hooks/UseGetAllProjects";
import { useTranslation } from "react-i18next";


const OurProjects = ({ slice,colSize }) => {
  const { t } = useTranslation();

  const [Projects,Data] = UseGetAllProjects();
  
  let display=[]
  if(slice){
    display=Data
  }
  else{
    display=Projects
  }


 

  return (
    <>
      <div className={`section section-padding-2 `}>
        <div className="container">
          <SectionTitle
            subtitle={t("Home:ourProject.subTitle")}
            title={t("Home:ourProject.title")}
            textAlignment="heading-left mb--40"
            textColor=""
          />
        
          <div className="row row-15">
            {display.map((item, index) => (
              <div className={colSize ? colSize : "col-md-6"} key={index}>
                <ProjectCard project={item} />
              </div>
            ))}
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img
              src={"/images/others/circle-2.png"}
              alt="circle"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={ "/images/others/bubble-2.png"}
              alt="Line"
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
    </>
  );
};

export default OurProjects;
