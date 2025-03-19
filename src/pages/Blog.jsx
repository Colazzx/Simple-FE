import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // vanila JavaScript
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);

  // Axios
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-3">
            <Fade delay={post.id * 10}>
              <Card style={{ width: "25rem", minHeight: "14rem" }}>
                <Card.Img
                  variant="top"
                  src="/src/assets/mog.png"
                  width={20}
                  height={100}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
