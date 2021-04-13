import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-3 text-center">
      <div>
        <img style={{height: '70px'}} src={service.img} alt="" />
        <h4 className="py-4">{service.name}</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          ipsam temporibus ipsum, doloribus molestiae libero.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
