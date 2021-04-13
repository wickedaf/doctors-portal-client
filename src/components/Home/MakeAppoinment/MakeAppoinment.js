import React from 'react';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <section className="container shadow rounded make-appoinment-container my-5 py-5">
            <div className="row">
                <div className="col-md-5">
                    <img style={{height: '500px'}} src="/images/doctor.png" alt=""/>
                </div>
                <div className="col-md-7">
                    <h5 className="text-uppercase color-primary py-2">Appoinment</h5>
                    <h1 className="text-white py-2">Make an appoinment <br/> today</h1>
                    <p className="text-white py-2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid exercitationem mollitia ratione illo corrupti laudantium!</p>
                    <div className="btn btn-primary px-4">Learn More</div>
                </div>
            </div>
            
        </section>
    );
};

export default MakeAppoinment;