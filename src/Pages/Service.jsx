import React from "react";
import { aboutImage } from "../Values/Image";

function Service() {
  return (
    <div>
      <div id="hero-area" className="hero-area-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="contents services-hero text-center">
                <h1 className="head-title wow fadeInUp">Our Services</h1>
                <div
                  className="header-button wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h5 className="font-weight-light">
                    Our aim is to help you optimized and simplify your
                    infastructure such that you can accelerate innovation with
                    one or many of the existing cloud technologies. Want to run
                    Kubernetes, on-premise cloud, use AWS or Google cloud we are
                    here to help you move to these technologis as your most cost
                    effective partner.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="section-header">
                <h2
                  className="section-title wow fadeInLeft mb-4"
                  data-wow-delay="0.3s"
                >
                  Kubernetes and Microservices architecture
                </h2>
                <p className="mb-3">
                  We combine our expertise and knowledge in software
                  development, as well as leadership, strategy and operations to
                  create unique digital advantages that will help our customers
                  innovate at speed and scale.
                </p>
                <p className="mb-3">
                  Our aim is to help you optimized and simplify your
                  infastructure such that you can accelerate innovation with one
                  or many of the existing cloud technologies. Want to run
                  Kubernetes, on-premise cloud, use AWS or Google cloud we are
                  here to help you move to these technologis as your most cost
                  effective partner.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={aboutImage} className="img-fluid mb-3" />
            </div>
          </div>

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check-square"></i>
              </span>
              We combine our expertise and knowledge in software development, as
              well as leadership, strategy and operations to create unique
              digital advantages that will help our customers innovate at speed
              and scale.
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check-square"></i>
              </span>
              We combine our expertise and knowledge in software development, as
              well as leadership, strategy and operations to create unique
              digital advantages that will help our customers innovate at speed
              and scale.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
