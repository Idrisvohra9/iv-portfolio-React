import React from "react";
import logo from "../../Assets/Images/logo1.webp";
import youtube from "../../Assets/Images/youtube.svg";
import instagram from "../../Assets/Images/instagram.svg";
import github from "../../Assets/Images/github.svg";
import octopus from "../../Assets/Images/octopus.svg";
import twitter from "../../Assets/Images/twitter.svg";
import linkedin from "../../Assets/Images/linkedin.svg";

export default function Footer() {
  return (
    <footer className="IV-footer py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <a
              className="d-flex align-items-center mb-2 link-light text-decoration-none"
              href="/"
            >
              <img
                src={logo}
                alt="Logo"
                width={30}
                height={30}
                className="ms-2"
              />
              <span className="fs-5 ms-2">IV-Portfolio</span>
            </a>
            <ul className="list-unstyled small">
              <li className="mb-2">
                Designed and built with all the love in the world by me.
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-4 offset-lg-1">
            <h5>Idris Vohra Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/idris_haider/"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" />
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.youtube.com/channel/UC7WlFhckErZwpHZ5EB7mImw"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube} alt="" />
                  YouTube
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/Idrisvohra9"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="" />
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/idris-vohra-589106256/"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="" />
                  linkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <h5>themellowcoder Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/docs/5.2/"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" />
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/themellowcoder"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" />
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://themellowcoder.com/#"
                  className="d-inline-flex flex-row justify-content-between align-items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={octopus} alt="" />
                  Main Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
