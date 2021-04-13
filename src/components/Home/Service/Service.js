import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const serviceData = [
        {
            name: 'Flouride Treatment',
            img: './images/fluoride.png'
        },
        {
            name: 'Cavity Filling',
            img: './images/cavity.png'
        },
        {
            name: 'Teeth Whitening',
            img: './images/whitening.png'
        }
    ];
    return (
        <section className="my-5 py-5">
            <div className="text-center pb-5">
                <h5 className="color-primary">OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>
            <div className="row justify-content-center mt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Service;