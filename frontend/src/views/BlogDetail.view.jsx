import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const [blogPost, setBlogPost] = useState({});

  const _id = useParams().id;
  const { 
    titolo, 
    cover,
    readTime, 
    author, 
    content, 
    categoria } = blogPost;

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/blogposts/post/${_id}`
      );
      const data = await response.json();
      setBlogPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogPost();
  }, [_id]);

  return (
    <Container>
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
            style={{
              maxHeight: "300px",
              minHeight: "200px",
              minWidth: "200px",
              maxwidth: "200px",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col xs={12} md={8}>
          <div>
            <p>{content}</p>
            <p className="text-muted">
              Autore: <strong>{author}</strong>
            </p>
            <p>
              <span className="badge bg-primary">{categoria}</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
