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
  const [pageCount, setPageCount] = useState (0);
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
    fetchBlogPostNumber();
    fetchBlogPosts();
  }, [page]);

const fetchBlogPostNumber = async() => {
    try {
      const response = await fetch (
       `http://localhost:3001/api/blogposts/page/count`
      );
      const data = await response.json();
      setPageCount(data);
      console.log("Page count:", data);  
    } catch (error) {
      console.log(error)
    }
  };
  

const createPageArray = () => {
    const pageArray = Array.from({lenght: pageCount}).map((_,index) => index +1);
    console.log("PageArray:", pageArray);
    return pageArray;
  }
  
 
  
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
        {createPageArray().map((page) => (
            <Link
              key={page}
              className="m-2 fs-4"
              to={`/${page}`}
            >
              {page} 
              </Link>
      ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogList;
