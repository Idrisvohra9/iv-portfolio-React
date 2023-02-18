import React from "react";
import ProfileComp from "./components/ProfileComp";
import Scrollspy from "react-ui-scrollspy";
import linkedIn from "./Images/linkedin.svg";
import whatsapp from "./Images/whatsapp.svg";
import gmail from "./Images/gmail.svg";
import insta from "./Images/instagram.svg";

export default function Contact() {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="d-flex flex-lg-row">
          <div className="nav-scrollspy">
            <ProfileComp />
            <a href="#whats" data-to-scrollspy-id="whats">
              Whatsapp
            </a>
            <a href="#email" data-to-scrollspy-id="email">
              Send Mail
            </a>
            <a href="#dm-insta" data-to-scrollspy-id="dm-insta">
              DM on Insta
            </a>
            <a href="#dm-linkedin" data-to-scrollspy-id="dm-linkedin">
              DM on LinkedIn
            </a>
          </div>
          <div className="content-main">
            <Scrollspy>
              <section id="whats">
                <h1>Whatsapp me😉</h1>
                <div>
                  Click to message me{" "}
                  <a href="https://wa.me/919106930717" className="btn btn-dark social">
                    <img src={whatsapp} alt="" />
                  </a>
                </div>
              </section>
              <section id="email">
                <h1>Send me a mail 🤷‍♂️</h1>
                <div>
                  Click to email me{" "}
                  <a href="mailto: idrishaider987@gmail.com" className="btn btn-dark social">
                    <img src={gmail} alt="" />
                  </a>
                </div>
              </section>
              <section id="dm-insta">
                <h1>Dm me on Insta 📸</h1>
                <div>
                  Click this{" "}
                  <a href="https://www.instagram.com/idris_haider/" className="btn btn-dark social">
                    <img src={insta} alt="" />
                  </a>
                </div>
              </section>
              <section id="dm-linkedin">
                <h1>Reach me through LinkedIn 👨‍💻</h1>
                <div>
                  <a href="https://www.linkedin.com/in/idris-vohra-589106256" className="btn btn-dark social">
                    <img src={linkedIn} alt="" />
                  </a>
                </div>
              </section>
            </Scrollspy>
          </div>
        </div>
      </div>
    </div>
  );
}
