import React from "react";
import { Card } from "react-bootstrap";

const TestimonialDetail = ({ testimonial }) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-3 shadow rounded">
      <Card.Body className="px-4 py-4">
        <Card.Text className="text-justify text-muted">{testimonial.message}</Card.Text>
        <div className="py-3">
          <img className="w-25" src={testimonial.img} alt=""/>
          <h5 className="color-primary d-inline-block ml-3">Winson Herry</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TestimonialDetail;
