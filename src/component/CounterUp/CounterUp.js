import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import Counter from './Counter';


const CounterUp = () => {
    return (
        <div className="section section-padding bg-color-dark">
            <div className="container">
            <SectionTitle 
                    subtitle="Featured Case Study"
                    title="Design startup movement"
                    description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div className="row">
                    <Counter colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterUp;