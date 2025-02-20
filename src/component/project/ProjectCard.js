import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const ProjectCard = ({ project}) => {
		const { i18n } = useTranslation();
	
	
    return (
		<>
			<div className='project-grid'>
				<div className="thumbnail">
				<Link to={`/project/${project._id}`}>
					<img src={project.imageCover} alt="icon" />
				</Link>
				</div>
				<div className="content">
				<h4 className="title"> 
					<Link to={`/project/${project._id}`}>{i18n.language==='en'?project.name_en :project.name_ar}</Link>
				</h4>
				</div>
			</div>
		</>
    )
}

export default ProjectCard;