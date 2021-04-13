import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DoctorDetail = ({ doctor }) => {
  return (
    <div className="col-md-3 text-center">
      <img src={doctor.img} alt="" className="img-fluid" />
      <div className="py-3">
        <h5>{doctor.name}</h5>
        <small className="text-muted"><FontAwesomeIcon className="mx-1" icon={faPhone} />{doctor.phone}</small>
      </div>
    </div>
  );
};

export default DoctorDetail;
