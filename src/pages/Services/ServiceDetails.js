import React from 'react';
import {useParams} from 'react-router-dom';
import Tilty from 'react-tilty';
import serviceData from '../../utils/serviceData.json'

import DescripSection from '../../component/descripSection/DescripSection';
import SectionTitle from '../../component/sectionTitle/SectionTitle';
import SEO from '../../component/SEO';

import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import AboutTwo from '../../component/AboutUs/AboutTwo';
import { UseGetOneService } from '../../Hooks/ServicesHooks';


const ServiceDetails = () => {

    const {id} = useParams();
    const [service]=UseGetOneService(id);

    //static data
    const allServiceData = serviceData;



    return (
        <>
        
        <SEO title="Service Details" />
        <main className="main-wrapper">
            <DescripSection 
            title={service.name}
            paragraph ={service.description}
            styleClass=""
            mainThumb="/images/banner/banner-thumb-4.png"
            />
            <AboutTwo />
           
            <div className="section section-padding bg-color-light pb--70">
                <SectionTitle 
                    subtitle={allServiceData.process.sectionSub}
                    title={allServiceData.process.sectionTitle}
                    description={allServiceData.process.para}
                    textAlignment=""
                    textColor="mb--90"
                />
                <div className="container">
                    {allServiceData.process.steps.map((data, index) => (
                        <div key={index} className={`process-work ${(index % 2  === 1) ? "content-reverse" : ""}`}>
                            <Tilty perspective={2000}>
                                <div className="thumbnail">
                                    <img src={ data.thumb} alt="Thumbnail" />
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
                <ul className="shape-group-17 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                    <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
                    <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                    <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
                </ul>
            </div>
            <div className="section section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Our Project"
                        title="Featured Designs"
                        description=""
                        textAlignment=""
                        textColor=""
                    />
                    <div className="row row-35">
                        {/* {getProjectData.slice(0, 2).map((data) => (
                            <div className="col-md-6" key={data.id}>
                                <ProjectCard  project={data}/>
                            </div>
                        ))} */}
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
            <ContactUsSectoin />
        </main>
        </>
    )
}

export default ServiceDetails;