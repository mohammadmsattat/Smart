import React from 'react';
import DescripSection from '../../component/descripSection/DescripSection';
import SEO from '../../component/SEO';
import SectionTitle from '../../component/sectionTitle/SectionTitle';
import AboutThree from '../../component/AboutUs/AboutThree';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import CounterUpData from '../../component/CounterUp/CounterUpData';

import ServiceCard from '../../component/service/ServiceCard';

import { UseGetAllServices } from '../../Hooks/ServicesHooks';

const ServicePage = () => {

    const[services]=UseGetAllServices();

    return (
        <>
        <SEO title="Service Two" />

        <main className="main-wrapper">
            <DescripSection 
                title="Best solutions for your business"
                paragraph ="Give your business a unique logo to stand out from crowd. We’ll create logo specifically for your company.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <CounterUpData />
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can <br> help you with"
                        description=""
                        textAlignment="heading-left"
                        textColor=""
                    />
                    <div className="row">
                    {
                        services.map((item,index)=>{
                          return  <ServiceCard key={index} serviceStyle="service-style-2" items={item} />

                        })
                    }
                    </div>
                </div>
            </div>

            <AboutThree />
            
            <ContactUsSectoin />
        </main>
        </>
    )
}

export default ServicePage;