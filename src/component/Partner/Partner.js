import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import PartnerItem from './PartnerItem';
import { useTranslation } from 'react-i18next';


const BrandOne = () => {
          const { t } = useTranslation();
    
    return (
        <div className="section section-padding-2 bg-color-dark">
        <div className="container">
            <SectionTitle 
                subtitle={t("Home:partners.subtitle")}
                title={t("Home:partners.title")}
                description={t("Home:partners.description")}
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className='row'>
               <PartnerItem />
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
        </ul>
    </div>
    )
}

export default BrandOne;