import React from "react";
import { Card } from "react-bootstrap";
import './BlogDetail.css';

const BlogDetail = ({ blog }) => {
  return (
    <Card style={{ width: "18rem" }} className="blog-card mx-3 shadow rounded">
      <Card.Body className="px-4 py-4">
        <div className="py-3 d-flex">
          <img className="w-25" src={blog.img} alt="" />
          <div className="mx-3 justify-content-center">
            <h5 className="color-primary d-inline-block">{blog.name}</h5>
            <small className="d-block text-muted">{blog.date}</small>
          </div>
        </div>
        <h4>{blog.title}</h4>
        <Card.Text className="text-justify text-muted py-3">
          {blog.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogDetail;
