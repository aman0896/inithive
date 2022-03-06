import React from "react";
import "./Services.css";
import { serviceList } from "../../Values/ServiceList";
import Card from "../Card/Card";

function Services() {
  const viewService = serviceList.map((service, index) => {
    return (
      <div key={index} className="col-sm-6 p-0 m-0 col-xs-12">
        <div
          className="services-item wow animate__animated animate__fadeInRight"
          data-wow-delay={((parseInt(index) + 1) * 0.3).toString() + "s"}
        >
          <Card data={service} />
        </div>
      </div>
    );
  });

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="row section-mobile-view">
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 service-content">
            <div className="row">{viewService}</div>
          </div>
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 section-header">
            <h2
              className="section-title wow animate__animated animate__fadeInDown"
              data-wow-delay="0.3s"
            >
              We provide consulting and professional services on following
              areas:
            </h2>
            <p>
              Our aim is to help you optimized and simplify your infastructure
              such that you can accelerate innovation with one or many of the
              existing cloud technologies. Want to run Kubernetes, on-premise
              cloud, use AWS or Google cloud we are here to help you move to
              these technologis as your most cost effective partner.
            </p>
          </div>
        </div>
        {/* <p className="text-center mt-3">
          <a href="/service">
            <b>
              Learn more <i className="fas fa-chevron-right ml-2"></i>
            </b>
          </a>
        </p> */}
      </div>
    </section>
  );
}

export default Services;
