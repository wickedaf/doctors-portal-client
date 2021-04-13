import React from 'react';
import DoctorDetail from '../DoctorDetail/DoctorDetail';

const Doctors = () => {
    const doctorData = [
        {
            name: 'Dr. Caudi',
            phone: '+834 0854-4545',
            img: '/images/doctor.png'
        },
        {
            name: 'Dr. Caudi',
            phone: '+834 0854-4545',
            img: '/images/doctor.png'
        },
        {
            name: 'Dr. Caudi',
            phone: '+834 0854-4545',
            img: '/images/doctor.png'
        },
    ]
    return (
        <section className="container">
            <div className="text-center pb-3">
                <h5 className="color-primary">Our Doctors</h5>
            </div>
            <div className="row d-flex flex-wrap justify-content-center mt-5">
                {
                    doctorData.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail> )
                }
            </div>
        </section>
    );
};

export default Doctors;