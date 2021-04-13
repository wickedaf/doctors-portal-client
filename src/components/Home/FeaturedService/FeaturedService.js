import React from 'react';

const FeaturedService = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row mx-0">
                <div className="col-md-5">
                    <img style={{height: '550px'}} className="img-fluid shadow" src="./images/fs.png" alt=""/>
                </div>
                <div className="col-md-7">
                    <h1 style={{fontWeight: '600', letterSpacing: '2px'}} className="text-dark my-5">Exceptional Dental <br/> Care, On Your Terms</h1>
                    <p className="text-muted mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo libero, accusantium dolor quisquam soluta, quaerat deleniti maxime, autem hic omnis at culpa. Ea obcaecati voluptate magnam illum, minima fuga earum ipsa omnis, consequatur dolore culpa dolor necessitatibus minus architecto repellat nostrum error repudiandae eum voluptatem nulla quibusdam quidem eaque nesciunt. Voluptas error facere, amet ea ipsum, quibusdam laborum doloremque rerum fuga in quo alias quidem maiores consequuntur. Veniam, libero ex officiis nam nobis, quaerat explicabo sunt ullam, cupiditate eligendi deserunt</p>
                    <div className="btn btn-primary px-4">Learn more</div>
                </div>
            </div>
            
        </section>
    );
};

export default FeaturedService;