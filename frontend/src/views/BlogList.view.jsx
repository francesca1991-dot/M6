import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//component import
import BlogCard from "../components/BlogCard/BlogCard.component";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const page = useParams().page ?? 1;

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/blogposts/page/${page}`
      );
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [page]);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="bg-primary text-white text-center">
            Author's Blog-Post
          </h2>
        </Col>
      </Row>
      <Row>
      {blogPosts.map(({ _id, titolo, cover, author, categoria }) => (
    <BlogCard
      key={_id}
      _id={_id}
      titolo={titolo}
      cover={cover}
      author={author}
      categoria={categoria}
    />
  ))}
      </Row>
      <Row>
        <Col className="text-center">
          {[1, 2, 3, 4, 5].map((page) => (
            <Link className="m-2 fs-2" key={page} to={`/blog/page/${page}`}>
              {page}
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogList;
