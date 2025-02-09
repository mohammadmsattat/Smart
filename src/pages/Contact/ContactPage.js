import React from 'react';
import SEO from '../../component/SEO';
import DiscipWithBack from '../../component/descripSection/DiscipWithBack';
import SectionTitle from '../../component/sectionTitle/SectionTitle';
import FormTwo from '../../component/Contact/FormTwo';
import ContactLocation from '../../component/Contact/ContactLocation';



const ContactPage = () => {
    return (
        <>
            <SEO title="Blog Grid" />
            <main className="main-wrapper">
                <DiscipWithBack 
                title="Contact"
                page="Contact"
                />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                                <h3 className="title">Get a free Abstrak quote now</h3>
                                <FormTwo />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                <h4 className="title">Phone</h4>
                                <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
                                <h4 className="phone-number"><a href="tel:1234567890">(123) 456 7890</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Email</h4>
                                <p>Our support team will get back to in 48-h during standard business hours.</p>
                                <h4 className="phone-number"><a href="mailto:info@example.com">info@example.com</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="Circle" /></li>
                </ul>
            </div>

            <div className="section section-padding bg-color-dark overflow-hidden">
                <div className="container">
                    <SectionTitle 
                        subtitle="Find Us"
                        title="Our office"
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" /></li>
                </ul>
            </div>

            </main>
        </>
    )
}

export default ContactPage;