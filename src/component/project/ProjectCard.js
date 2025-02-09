import React from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = ({ project}) => {
	
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
					<Link to={`/project/${project._id}`}>{project.name}</Link>
				</h4>
				</div>
			</div>
		</>
    )
}

export default ProjectCard;