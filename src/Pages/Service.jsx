import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { serviceList } from "../Values/ServiceList";

function Service() {
  const location = useLocation();
  useEffect(() => {
    const id = location.state;
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 60,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const viewService = serviceList.map((service, index) => {
    return (
      <div
        key={index}
        id={service.id}
        className={index % 2 === 0 ? "bg-gray pt-2 pb-2" : "bg-light pt-2 pb-2"}
      >
        <div className="container pt-5 pb-5">
          <div
            className={index % 2 === 0 ? "row" : "row d-flex flex-row-reverse"}
          >
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <img
                src={service.image}
                style={{ width: "50%" }}
                alt=""
                className="img-fluid mb-3"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="section-header">
                <h2
                  className="section-title wow animate__animated animate__fadeInRight mb-4"
                  data-wow-delay="0.3s"
                >
                  {service.heading}
                </h2>
                <p
                  className="mb-3 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {service.detail2}
                </p>
                <p
                  className="mb-3 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {service.detail2}
                </p>
              </div>
            </div>
          </div>

          <ul
            className="fa-ul wow animate__animated animate__fadeInUp"
            data-wow-delay="0.9s"
          >
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
    );
  });
  return (
    <div>
      <div id="hero-area" className="hero-area-bg bg-light">
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
      <div>{viewService}</div>
    </div>
  );
}

export default Service;
