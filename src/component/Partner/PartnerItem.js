import React from 'react';
import { UseGetAllPartners } from '../../Hooks/PartenrHook';

const Data = [
    {
        image: "/images/brand/brand-1.png"
    },
    {
        image: "/images/brand/brand-2.png"
    },
    {
        image: "/images/brand/brand-3.png"
    },
    {
        image: "/images/brand/brand-4.png"
    },
    {
        image: "/images/brand/brand-5.png"
    },
    {
        image: "/images/brand/brand-6.png"
    },
    {
        image: "/images/brand/brand-7.png"
    },
    {
        image: "/images/brand/brand-8.png"
    }
]


const PrtneeItem = () => {
    const[partner]=UseGetAllPartners();
    

    return (
        <>
            {partner.map((item, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={item.logo} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default PrtneeItem;