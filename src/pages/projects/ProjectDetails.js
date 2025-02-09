import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';
import SEO from '../../component/SEO';
import DiscripProduct from '../../component/descripSection/DiscripProduct';

import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import { UseGetOneProject } from '../../Hooks/ProjectsHooks';
import { trimString } from '../../utils';


const ProjectDetails = () => {

    const {id} = useParams();
        const [project]=UseGetOneProject(id);
        console.log(project);
        
    
 




    return (
        <>
        <SEO title="Project Details"/>
        <main className="main-wrapper">
            <DiscripProduct 
            title={project.name}
            paragraph ={project.description}
            mainThumb={project.imageCover}
            />
            <section className="section-padding single-portfolio-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-heading heading-left mb-0">
                                
                                <h3 className="title">{project.name}</h3>
                            </div>
                            {
                                project.description
                            }
                            <Link to="#" className="axil-btn btn-fill-primary">Get it Now</Link>
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="why-choose-us">
                                <div className="section-heading heading-left">
                                    <h3 className="title">We delivered</h3>
                                    <p>Digital technology has made our world more transparent and interconnected, posing new challenges and opportunities for every business.</p>
                                </div>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                        <Accordion.Body>
                                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><FaCode /> Design</Accordion.Header>
                                        <Accordion.Body>
                                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                        <Accordion.Body>
                                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUsSectoin />
        </main>
        </>
    )
}

export default ProjectDetails;