import React from 'react';
import DescripSection from '../../component/descripSection/DescripSection';
import SEO from '../../component/SEO';
import OurProjects from '../../component/project/OurProjects';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import { useTranslation } from 'react-i18next';

const PortfolioPage = () => {
          const { t } = useTranslation();
    

    return (
        <div>
        <SEO title="Project Three Column" />
        <main className="main-wrapper">
            <DescripSection 
                title={t('portfolio:Head.title')}
                paragraph ={t('portfolio:Head.paragraph')}
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <OurProjects colSize="col-xl-4 col-md-6" />
            <ContactUsSectoin />
        </main>
        </div>
    )
}

export default PortfolioPage;