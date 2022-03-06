import React from "react";
import { aboutImage } from "../../Values/Image";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text-wrapper pt-5 pb-5">
              <div>
                <h2
                  className="title-hl wow animate__animated animate__fadeInLeft mb-4"
                  data-wow-delay="0.3s"
                >
                  We are helping to grow <br />
                  your business.
                </h2>
                <h5 className="mb-3">
                  Cognitive is a top-tier software consultancy company that
                  focuses on <strong>Programmable Infrastructure</strong>{" "}
                  (Kubernetes) and <strong>Cloud Native</strong> applications.
                </h5>
                <p className="mb-3">
                  We combine our expertise and knowledge in software
                  development, as well as leadership, strategy and operations to
                  create unique digital advantages that will help our customers
                  innovate at speed and scale.
                </p>

                <a href="#" className="btn btn-common mt-3">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-0 padding-none feature-bg">
            <div
              className="feature-thumb"
              style={{ backgroundImage: `url(${aboutImage})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
