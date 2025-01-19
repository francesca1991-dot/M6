import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'; 

const BlogCard= ({titolo, 
     cover,
     readTime, 
     author, 
     categoria,
     content,
    _id}) => {
  return (
    <Container className="my-4 py-4 border rounded shadow  bg-secondary-subtle text-secondary-emphasis">
    <Row>
      <Col xs={12} className="mb-3 text-center">
        <h2>{titolo}</h2>
      </Col>
    </Row>
    <Row className="align-items-center">
      <Col xs={12} md={4} className="text-center">
        <img
          src={cover}
          alt={titolo}
          className="img-fluid rounded"
          style={{maxHeight: "300px", minHeight:"200px", minWidth:"200px", maxwidth:"200px", objectFit: "cover" }}
        />
      </Col>
      <Col xs={12} md={8}>
        <div>
          <p>{content}</p>
          <p className="text-muted">Autore: <strong>{author}</strong></p>
          <p>
            <span className="badge bg-primary">{categoria}</span>
          </p>
        </div>
        <Link to={`/blog/${_id}`} className="btn btn-outline-primary mt-3">
          Read more
        </Link>
      </Col>
    </Row>
  </Container>
);
}; 
export default BlogCard
