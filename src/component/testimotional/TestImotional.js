import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import TestimonialItem from './TestImotionalProp'
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
      const { t } = useTranslation();
    
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle 
                    subtitle={t("Home:testimonial.subtitle")}
                    title={t("Home:testimonial.title")}
                    description={t("Home:testimonial.description")}
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialItem colSize="col-lg-4" itemShow="3"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src={ "/images/others/bubble-1.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default Testimonial;