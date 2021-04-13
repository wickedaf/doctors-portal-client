import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container d-flex justify-content-center container my-5 py-5 rounded shadow">
      <div className="text-center content w-50 ">
        <h5 className="color-primary">CONTACT US</h5>
        <h1 className="py-1 text-white">Always connect with us</h1>
        <Form className="py-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Adress*" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Subject*" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control as="textarea" rows={4} placeholder="Write your message*" />
          </Form.Group>
          <div className="text-center">
            <Button className="px-5" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
