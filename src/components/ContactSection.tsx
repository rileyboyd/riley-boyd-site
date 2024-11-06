import React, { useState, useRef, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

let ContactForm = (props, ref) => {
  return (
    <div className="container rb-contact-section" id="contact" ref={ref}>
      <div className="rb-gap-5 d-none d-md-block" />
      <div className="rb-gap-3 d-md-none" />
      <div className="row vertical-gap">
        <div className="col-lg-5">
          <h2 className="display-4">Contact Me</h2>
          <div className="rb-gap mnt-3" />
          <p>Get in touch! Connect with me and say hi.</p>
          {/*
            <ul className="rb-contact-info">
              <li><strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
              <li><strong>Phone:</strong> +44 987 065 908</li>
              <li><strong>Email:</strong> info@Example.com</li>
              <li><strong>Fax:</strong> +44 987 065 909</li>
            </ul>
           */}
        </div>
        <div className="col-lg-7 rb-contact-section-widgets text-white">
          <div className="rb-widget">
            <div className="rb-contact-section-social text-white">
              <div className="rb-gap-3 mnt-6 d-none d-lg-block" />
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rileyboyd/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    Connect with me on&nbsp;LinkedIn:{" "}
                    <span className="social-handle">
                      www.linkedin.com/in/rileyboyd
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/riley_boyd" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                    Follow me on Twitter:{" "}
                    <span className="social-handle">@riley_boyd</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rb-gap-5" />
    </div>
  );
};

ContactForm = forwardRef(ContactForm);

export default ContactForm;
