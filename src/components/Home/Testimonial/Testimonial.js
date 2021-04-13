import React from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import './Testimonial.css';

const Testimonial = () => {
    const testimonialData = [
        {
            message: 'Lorem ipsum dolor sit amet fsadf consectetur adipisicing elit. Atque placeat, officia iste quae optio et, veniam totam eos, ut eum distinctio possimus natus voluptate voluptas',
            name: 'Winson Herry',
            location: 'California',
            img: '/images/client-(1).png'
        },
        {
            message: 'Lorem ipsum dolor sit amet fasdf consectetur adipisicing elit. Atque placeat, officia iste quae optio et, veniam totam eos, ut eum distinctio possimus natus voluptate voluptas',
            name: 'Winson Herry',
            location: 'California',
            img: '/images/client-(2).png'
        },
        {
            message: 'Lorem ipsum dolor sit amet fasdf consectetur adipisicing elit. Atque placeat, officia iste quae optio et, veniam totam eos, ut eum distinctio possimus natus voluptate voluptas',
            name: 'Winson Herry',
            location: 'California',
            img: '/images/client-(3).png'
        }
    ];
    return (
        <section className="testimonial-container container">
            <div className="justify-content-start">
                <h5 className="color-primary py-3">TESTIMONIAL</h5>
                <h1 className="py-3">What's Our Patient <br/> Says</h1>
            </div>
            <div className="d-flex justify-content-center flex-wrap py-4">
                {
                    testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                }
            </div>
        </section>
    );
};

export default Testimonial;