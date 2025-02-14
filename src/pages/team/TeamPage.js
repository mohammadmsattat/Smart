import React from 'react';
import SEO from '../../component/SEO';
import DescripSection from '../../component/descripSection/DescripSection';
import CounterUpData from '../../component/CounterUp/CounterUpData';
import ContactUsSectoin from '../../component/Contact/ContactUsSection';
import TeamComponent from '../../component/team/TeamComponent';
import { useTranslation } from 'react-i18next';

const TeamPage = () => {
    const { t } = useTranslation();


    return (
        <>
        <SEO title="Team" />
            <main className="main-wrapper">
                <DescripSection 
                title={t('Team:Head.title')}
                paragraph ={t('Team:Head.paragraph')}
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