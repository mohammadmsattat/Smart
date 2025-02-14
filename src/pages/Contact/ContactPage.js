import React from 'react';
import SEO from '../../component/SEO';
import DiscipWithBack from '../../component/descripSection/DiscipWithBack';
import SectionTitle from '../../component/sectionTitle/SectionTitle';
import FormTwo from '../../component/Contact/FormTwo';
import ContactLocation from '../../component/Contact/ContactLocation';
import { UseGetinformation } from '../../Hooks/OurInformation-Hooks/UseGetinformation';
import { useTranslation } from 'react-i18next';



const ContactPage = () => {
    const { t } = useTranslation();

    const {info}=UseGetinformation();
    
    return (
        <>
            <SEO title="Blog Grid" />
            <main className="main-wrapper">
                <DiscipWithBack 
                title={t('contact:Head.title')}
                page={t('contact:Head.page')}
                />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                                <h3 className="title">{t('contact:contact')}</h3>
                                <FormTwo />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                <h4 className="title">{t('contact:ourInformayion.phone.head')}</h4>
                                <p>{t('contact:ourInformayion.phone.p')}</p>
                                <h4 className="phone-number"><a href="tel:1234567890">{info.phone}</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">{t('contact:ourInformayion.email.head')}</h4>
                                <p>{t('contact:ourInformayion.email.p')}</p>
                                <h4 className="phone-number"><a href="mailto:info@example.com">{info.email}</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1"><img src={"/images/others/bubble-2.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={ "/images/others/bubble-1.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={ "/images/others/circle-3.png"} alt="Circle" /></li>
                </ul>
            </div>

            <div className="section section-padding bg-color-dark overflow-hidden">
                <div className="container">
                    <SectionTitle 
                        subtitle={t('contact:offices.subtitle')}
                        title={t('contact:offices.title')}
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src={ "/images/others/line-6.png"} alt="line" /></li>
                    <li className="shape shape-2"><img src={ "/images/others/circle-3.png"} alt="line" /></li>
                </ul>
            </div>

            </main>
        </>
    )
}

export default ContactPage;