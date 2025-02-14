import React from 'react';
import { FaEnvelopeOpen } from "react-icons/fa";
import { UseSendEmailFooter } from "../../Hooks/Contact-Hooks/UseSendEmailFooter";



const ComingSoon = ({img}) => {
    
    const { handelSend, setEmail } = UseSendEmailFooter();


   

    return (
        <>
            <main className="main-wrapper ">
                <div className="coming-soon-area onepage-screen-area ">
                    <div className="container">
                        <div className="row align-items-center justify-content-center mt-5">
                        
                        <div className="col-xl-6 col-lg-8">
                            <div className="content">
                            <h2 className="title">Our new website is on its way</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <form>
                                <div className="input-group">
                                    <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                    <input     onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" placeholder="Email address" />
                                    <button  onClick={handelSend} className="subscribe-btn" type="submit">Notify Me</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumbnail">
                                <img src={ img} alt="Coming Soon" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-2">
                            <img src={ "/images/others/bubble-28.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src={ "/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ComingSoon;