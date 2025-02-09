import React from 'react';
import { UseGetAllOffice } from '../../Hooks/OfficeHook';
import { trimString } from '../../utils';


const ContactLocation = () => {
    const [office, GetLoading]=UseGetAllOffice();
    

    return (
        <>
            {office ?office.map((item, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <img src={item.imageCover} alt="Office" />
                        </div>
                        <div className="content">
                            <h4 className="title">{item.location}</h4>
                            {
                                trimString(item.description)
                            }
                        </div>
                    </div>
                </div>
            )) :null}
        </>
    )
}

export default ContactLocation;