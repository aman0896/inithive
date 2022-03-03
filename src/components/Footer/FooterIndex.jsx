import React from "react";
import "./Footer.css";

export default function Footer({ children, ...restProps }) {
  return (
    <div className="footer-container footer" {...restProps}>
      {children}
    </div>
  );
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return (
    <div className="footer-wrapper" {...restProps}>
      {children}
    </div>
  );
};
Footer.Row = function FooterRow({ children, ...restProps }) {
  return (
    <div className="footer-row" {...restProps}>
      {children}
    </div>
  );
};
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return (
    <div className="footer-column" {...restProps}>
      {children}
    </div>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return (
    <div className="copyright" {...restProps}>
      {children}
    </div>
  );
};
Footer.Logo = function FooterLogo({ children, ...restProps }) {
  return (
    <img className="footer-logo" {...restProps}>
      {children}
    </img>
  );
};
