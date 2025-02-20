import React from 'react';
import FormOne from '../Contact/FormOne';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
                const { t } = useTranslation();
    
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">{t('Home:AboutUs.AboutUs')}</span>
                                <h2 className="title mb--40">{t('Home:AboutUs.title')}</h2>
                                <p>{t('Home:AboutUs.description1')} </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">{t('Home:contact')}</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={ "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={ "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={ "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutUs;