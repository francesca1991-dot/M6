import React, {useEffect, useState } from "react";

//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//component import
import AuthorCard from "../components/AuthorCard/AuthorCard.component";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/authors");
      const data = await response.json();
      setAuthors(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Authors</h2>
          </Col>
        </Row>
        <Row className="g-2">
        {authors.map((author) => (
            <AuthorCard key={author._id} {...author} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Authors; 


