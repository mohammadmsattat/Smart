import React from 'react';
import DescripSection from '../../component/descripSection/DescripSection';
import SEO from '../../component/SEO';
import OurProjects from '../../component/project/OurProjects';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';

const PortfolioPage = () => {

    return (
        <div>
        <SEO title="Project Three Column" />
        <main className="main-wrapper">
            <DescripSection 
                title="Our Projects"
                paragraph ="A quick view of industry specific problems solved with design by the awesome team at Abstrak.
                "
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