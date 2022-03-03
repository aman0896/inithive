import React from "react";
import { kubaselightImage, kubernatesInfImage } from "../../Values/Image";
import "./HeroArea.css";

function HeroArea() {
  return (
    <div>
      <div id="hero-area" className="hero-area-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="contents text-center">
                <img
                  className="logo mb-4"
                  src={kubaselightImage}
                  alt="Kubebase"
                />
                <h1 className="head-title wow fadeInUp">
                  Kubernetes based Infrastructure
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;
