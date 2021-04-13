import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './InfoCard.css';

const InfoCard = ({ info }) => {
  const cardStyle = `col-md-3 mx-3 py-4 rounded shadow color-bg-${info.background}`;
  return (
    <div className={cardStyle}>
      <div className="d-flex justify-content-center align-items-center text-white">
        <div className="mr-2">
          <FontAwesomeIcon className="info-icon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
