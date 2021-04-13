import React from 'react';
import { faMarker, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hour',
            description: 'Lorem ipsum, dolor sit amet consectetur ',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10068, United States',
            icon: faMarker,
            background: 'dark'
        },
        {
            title: 'Opening Hour',
            description: '+000 09890438542',
            icon: faPhone,
            background: 'primary'
        }
    ];
    return (
        <section className="row justify-content-center">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;