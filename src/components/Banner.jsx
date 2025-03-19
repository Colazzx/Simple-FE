import React, { useState } from "react";
import "./Banner.css";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Banner = () => {
  const [nama, setNama] = useState("Manufest");

  const handleClick = () => {
    setNama("Inixindo Academy");
  };

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center flex-column order-lg-1 order-2">
            <Slide>
              <h1>
                Continuous Learning Keep Up To Date with{" "}
                <strong className="text-primary">{nama}</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                voluptatibus similique ullam obcaecati tenetur non ducimus modi
                consectetur soluta eius suscipit aut sint, commodi consequatur
                alias voluptas quam laudantium odit.
              </p>
              <div className="mt-4">
                <button
                  onClick={handleClick}
                  className="btn btn-outline-primary"
                >
                  Get Started
                </button>
                <Link to="/blog" className="btn btn-primary ms-2">
                  Learn More &rarr;
                </Link>
              </div>
            </Slide>
          </div>
          <div className="col-md-6 order-lg-2 order-1">
            <Fade>
              <img
                src="/images/banner.svg"
                className="img-fluid animation"
                alt="logo banner"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
