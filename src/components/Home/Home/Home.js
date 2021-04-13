import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;