import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const HeaderNav = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mx-4" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-4" href="#link">About</Nav.Link>
          <Nav.Link className="mx-4" href="#home">Dental Service</Nav.Link>
          <Nav.Link className="mx-4 text-white" href="#link">Reviews</Nav.Link>
          <Nav.Link className="mx-4 text-white" href="#link">Blogs</Nav.Link>
          <Nav.Link className="mx-4 text-white" href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
