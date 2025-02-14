import React from 'react';
import SEO from '../../component/SEO';
import DescripSection from '../../component/descripSection/DescripSection';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import AboutFive from '../../component/AboutUs/AboutFive';
import AboutFour from '../../component/AboutUs/AboutFour';
import AboutThree from '../../component/AboutUs/AboutThree';
import { useTranslation } from 'react-i18next';



const AboutUsPage = () => {
        const { t } = useTranslation();
    

    return (
        <>
        <SEO title="About us" />
            <main className="main-wrapper">
                <DescripSection 
                title={t('AboutUs:Head.title')}
                paragraph ={t('AboutUs:Head.paragraph')}
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