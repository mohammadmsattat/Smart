import React from 'react';

// import components
import Introduction from '../../component/Home/Iintroduction';
import ServiceHome from '../../component/Home/ServiceHome';
import AboutUs from '../../component/Home/AboutUs';
import OurProjects from '../../component/project/OurProjects';
import CounterUp from '../../component/CounterUp/CounterUp';
import Testimonial from '../../component/testimotional/TestImotional';
import Partner from '../../component/Partner/Partner'
import SEO from '../../component/SEO';
import SectionTitle from '../../component/sectionTitle/SectionTitle';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import { useTranslation } from 'react-i18next';

//import custom hooks



const HomePage = () => {
            const { t } = useTranslation();
    

    return (
        <>
        <SEO title="Digital Agency"/>
        <main className="main-wrapper">
            <Introduction />
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle={t('Home:Service.title')}
                        title={t('Home:Service.services')}
                        description={t('Home:Service.description')}
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServiceHome  />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={ "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={ "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={ "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div>
            <AboutUs />
            <OurProjects slice={true} />
            <CounterUp />
            <Testimonial />

            <Partner />
            <ContactUsSectoin /> 
        </main>
        </>
    )
}

export default HomePage;

