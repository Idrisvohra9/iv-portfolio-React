import React from "react";
import ProfileComp from "./components/ProfileComp";
import Scrollspy from "react-ui-scrollspy";
import linkedIn from "../Assets/Images/linkedin.svg";
import whatsapp from "../Assets/Images/whatsapp.svg";
import gmail from "../Assets/Images/gmail.svg";
import insta from "../Assets/Images/instagram.svg";
import Head from "./components/Head";

export default function Contact() {
  return (
    <div className="main" onLoad={() => window.scrollTo(0, 0)}>
      <Head
        title="Contact"
        description="Contact Options page of Idris Vohra"
        keywords="Idris, Vohra, Idris Vohra, Contact, MERN Stack, Developer, JavaScript"
      />
      <div className="container-fluid">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="d-flex flex-lg-row">
          <div className="nav-scrollspy">
            <ProfileComp />
            <a href="#all-socials" data-to-scrollspy-id="all-socials">
              All Socials
            </a>
          </div>
          <div className="content-main">
            <Scrollspy>
              <section id="all-socials">
                <h1>My Socials</h1>
                <div>
                  All the ways to connect
                  <div className="social-grid">
                    <a
                      href="https://wa.me/919106930717"
                      className="btn btn-dark social"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Whatsapp <img src={whatsapp} alt="Whatsapp" />
                    </a>
                    <a
                      href="mailto: idrishaider987@gmail.com"
                      className="btn btn-dark social"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Email <img src={gmail} alt="Gmail" />
                    </a>
                    <a
                      href="https://www.instagram.com/idris_haider/"
                      className="btn btn-dark social"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Insta <img src={insta} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/idris-vohra-589106256"
                      className="btn btn-dark social"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      LinkedIn <img src={linkedIn} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              </section>
            </Scrollspy>
          </div>
        </div>
      </div>
    </div>
  );
}
