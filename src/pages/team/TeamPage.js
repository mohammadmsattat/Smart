import React from 'react';
import SEO from '../../component/SEO';
import DescripSection from '../../component/descripSection/DescripSection';
import CounterUpData from '../../component/CounterUp/CounterUpData';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import TeamComponent from '../../component/team/TeamComponent';

const TeamPage = () => {

    return (
        <>
        <SEO title="Team" />
            <main className="main-wrapper">
                <DescripSection 
                title="Meet talent &amp; experience"
                paragraph ="Grow your business online by awesomely designed mobile apps that fits all types."
                styleClass="thumbnail-2"
                mainThumb="/images/banner/banner-thumb-2.png"
                />
                <CounterUpData />
                <TeamComponent />
                <ContactUsSectoin />
            </main>
        </>
    )
}

export default TeamPage;