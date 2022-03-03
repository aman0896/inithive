import React from "react";
import {
  automationImage,
  kubernetsImage,
  openStackImage,
  publicServerCloudImage,
} from "../../Values/Image";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
            We provide consulting and professional services on following areas:
          </h2>
          <p>
            Our aim is to help you optimized and simplify your infastructure
            such that you can accelerate innovation with one or many of the
            existing cloud technologies. Want to run Kubernetes, on-premise
            cloud, use AWS or Google cloud we are here to help you move to these
            technologis as your most cost effective partner.
          </p>
        </div>
        <div className="row">
          {/* <!-- Services item --> */}
          <div className="col-sm-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="img-wrapper">
                <img
                  src={kubernetsImage}
                  className="img-fluid"
                  alt="kubernets"
                />
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Kubernetes and Microservices architecture</a>
                </h3>
                <p>
                  Microservices architecture and technologies like Kubernetes
                  and Docker promises a lot, but are equally challenging to
                  setup, maintain and sometime make sense off. Our experienced
                  solutions architects will help you decide if and how your
                  requirements fits these technologies and find the most cost
                  affective way to try these technologies and biring to
                  production use.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-sm-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="img-wrapper">
                <img
                  src={openStackImage}
                  className="img-fluid"
                  alt="openstack"
                />
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Openstack Private Cloud</a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-sm-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <div className="img-wrapper">
                <img
                  src={automationImage}
                  className="img-fluid"
                  alt="automation"
                />
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Monitoring and Automation Services</a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/* Services item */}
          <div className="col-sm-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <div className="img-wrapper">
                <img
                  src={publicServerCloudImage}
                  className="img-fluid"
                  alt="publicservercloud"
                />
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Public Cloud Server</a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-3">
          <a href="/service">
            <b>
              Learn more <i className="fas fa-chevron-right ml-2"></i>
            </b>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Services;
