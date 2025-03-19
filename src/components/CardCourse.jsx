import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Images from "../config/Data";
import { Fade } from "react-awesome-reveal";

const CardCourse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Images);
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {data.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-3">
              <Fade delay={index * 100}>
                <Card style={{ width: "25rem", minHeight: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.url}
                    width={100}
                    height={200}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.courseName}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCourse;
