import React from "react";

const Footer = () => (
  <footer className="rb-footer">
    <div className="bg-image">
      <div
        style={{ backgroundImage: "url('assets/images/footer-1.jpg')" }}
      ></div>
      <div
        className="bg-image-overlay"
        style={{ backgroundColor: "rgba(12, 12, 12, 0.9)" }}
      ></div>
    </div>

    <div className="rb-footer-widgets text-white">
      <div className="container">
        <div className="row vertical-gap">
          <div className="col-lg-12">
            <div className="rb-widget">
              <h4 className="rb-widget-title text-white">About Me</h4>
              <p className="rb-heading-font">
                My name's Riley Boyd, I'm a senior front-end web developer with
                over ten years of professional experience. I have an M.A. in
                Humanities Computing, and an Hons. B.A. in Multimedia and
                Fine&nbsp;Art. I live in Toronto, Ontario,&nbsp;Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rb-footer-cont rb-footer-cont-sm">
      <div className="container text-center">
        <div className="rb-footer-text text-white">
          <p>&copy;2020 Riley Boyd</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
