import React from "react";
import ProfileComp from "./components/ProfileComp";
import Scrollspy from "react-ui-scrollspy";
import linkedIn from "./Images/linkedin.svg";
import whatsapp from "./Images/whatsapp.svg";
import gmail from "./Images/gmail.svg";
import insta from "./Images/instagram.svg";
import { Helmet } from "react-helmet";

export default function Contact() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="main" onLoad={scrollToTop}>
      <Helmet>
        <title>Idris Vohra - Contact</title>
        <meta
          name="description"
          content="Contact Options page of Idris Vohra"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Idris Vohra" />
        <meta name="twitter:title" content="Idris Vohra - Portfolio" />
        <meta
          name="twitter:description"
          content="This is a portfolio website of Full stack MERN Web developer Idris Vohra."
        />
        <meta
          name="twitter:image"
          content="https://photos.app.goo.gl/ev1uhkPK6feYxmgb8"
        />
      </Helmet>
      <div className="container-fluid">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="d-flex flex-lg-row">
          <div className="nav-scrollspy">
            <ProfileComp />
            <a href="#all-socials" data-to-scrollspy-id="whats">
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
                    >
                      Whatsapp <img src={whatsapp} alt="" />
                    </a>
                    <a
                      href="mailto: idrishaider987@gmail.com"
                      className="btn btn-dark social"
                    >
                      Email <img src={gmail} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/idris_haider/"
                      className="btn btn-dark social"
                    >
                      Insta <img src={insta} alt="" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/idris-vohra-589106256"
                      className="btn btn-dark social"
                    >
                      {" "}
                      LinkedIn <img src={linkedIn} alt="" />
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
