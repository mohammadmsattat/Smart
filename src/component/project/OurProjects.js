import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import { UseGetAllProjects } from "../../Hooks/project-Hooks/UseGetAllProjects";
import { useTranslation } from "react-i18next";


const OurProjects = ({ colSize, slice }) => {
  const { t } = useTranslation();

  const [Projects,Data,filters] = UseGetAllProjects();


//   const handleChange = (e) => {
//     e.preventDefault();
// let target = e.target.textContent;

//     setActiveFilter(target);

//     let tempData = [];
//     if (target === filters[0].label) {
//   tempData = getAllItems.filter((data) => data.id <= visiableProject);
//     } else {
//   for (let i = 0; i < getAllItems.length; i++) {
//     const element = getAllItems[i];
//     let categories = element['category'];
    
//     if (categories.includes(target)) {
//       tempData.push(element)
//     } 
//   }
//     }
//     setVisibleItems(tempData);
// };
 

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
          <div className="isotope-button isotope-project-btn">
            {filters.map((filter) => (
              <button className="is-checked" key={filter._id}>
                {filter.category}
              </button>
            ))}
          </div>
          <div className="row row-15">
            {Data.map((item, index) => (
              <div className={colSize ? colSize : "col-md-6"} key={index}>
                <ProjectCard project={item} />
              </div>
            ))}
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-2.png"}
              alt="circle"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
              alt="Line"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
              alt="Line"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default OurProjects;
