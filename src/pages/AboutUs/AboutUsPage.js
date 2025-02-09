import React from 'react';
import SEO from '../../component/SEO';
import DescripSection from '../../component/descripSection/DescripSection';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
//import ProcessOne from '../component/process/ProcessOne';
import AboutFive from '../../component/AboutUs/AboutFive';
import AboutFour from '../../component/AboutUs/AboutFour';
import AboutThree from '../../component/AboutUs/AboutThree';



const AboutUsPage = () => {

    return (
        <>
        <SEO title="About us" />
            <main className="main-wrapper">
                <DescripSection 
                title="One of the fastest growing agency"
                paragraph ="We design and develop web and mobile applications for our clients worldwide."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />
                {/* <ProcessOne /> */}
                <ContactUsSectoin />
            </main>
        </>
    )
}

export default AboutUsPage;