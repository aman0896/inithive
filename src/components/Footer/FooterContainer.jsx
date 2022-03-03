import React from "react";
import { initHiveLogoImage } from "../../Values/Image";
import Footer from "./FooterIndex";

function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
            <Footer.Title>
              © Copyright 2019{" "}
              <span class="text-primary">initHive Solutions</span>. All rights
              reserved.
            </Footer.Title>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0 logo-container">
            <Footer.Logo src={initHiveLogoImage} alt="logo" preview="" />
          </div>
        </div>
      </Footer.Wrapper>
    </Footer>
  );
}

export default FooterContainer;
