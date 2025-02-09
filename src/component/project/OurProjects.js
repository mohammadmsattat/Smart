import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectData from "../../data/project/ProjectData.json";

import { UseGetAllProjects } from '../../Hooks/ProjectsHooks';


const filters = [
	{
		id: 1,
		label: "All Works",
    },
    {
		id: 2,
		label: "Branding",
    },
    {
		id: 3,
		label: "Mobile",
    }
];




const OurProjects = ({ colSize,slice}) => {

	const [Projects]=UseGetAllProjects();

	let Data=[]
	if(slice)
	{
		 Data=Projects.slice(0,6)
	}
	else{
		Data=Projects
	}

	
	

    return (
		<>
			<div className={`section section-padding-2 `}>
                <div className="container">
                <SectionTitle 
                        subtitle="Our Project"
                        title="Some of our <br>
                        finest work."
                        textAlignment="heading-left mb--40"
                        textColor=""
                    />
                    <div className="isotope-button isotope-project-btn">

						{filters.map((filter) => (
							<button  className='is-checked'

							key={filter.id}>{filter.label}</button>
						))}

					</div>
					<div className='row row-15'>
						{Data.map((item,index) => (
							<div className={colSize ? colSize : "col-md-6"} key={index}>
								<ProjectCard  project={item}/>
							</div>
						))}
					</div>

                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
		</>
    )
}

export default OurProjects;