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

//import custom hooks



const HomePage = () => {

    return (
        <>
        <SEO title="Digital Agency"/>
        <main className="main-wrapper">
            <Introduction />
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can help you with"
                        description="Nulla facilisi. Nullam in magna id dolor 
                        blandit rutrum eget vulputate augue sed eu imperdiet."
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServiceHome  />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
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

