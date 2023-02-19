import React from "react";
import Footer from "./components/footer";
import Scrollspy from "react-ui-scrollspy";
import Project from "./components/Project";
import ProfileComp from "./components/ProfileComp";
import py from "./Images/python.svg";
import css from "./Images/css.svg";
import js from "./Images/js.svg";
import html from "./Images/html.svg";
import react from "./Images/react.svg"
import pJSON from "./components/Projects.json";

export default function Projects() {
  function getProjectsByLang(lang) {
    let projects = pJSON;
    return projects.filter((p) => {
      return p.lang === lang;
    });
  }
  return (
    <div className="d-flex flex-lg-row main">
      <div className="nav-scrollspy">
        <ProfileComp />
        <a href="#overview-proj" data-to-scrollspy-id="overview-proj">
          Projects Overview
        </a>
        <a href="#python" data-to-scrollspy-id="python">
          <div className="d-flex align-items-center justify-content-center">
            Python <img src={py} alt="python" className="icon ms-1" />
          </div>
        </a>
        <a href="#css" data-to-scrollspy-id="css">
          <div className="d-flex align-items-center justify-content-center">
            CSS <img src={css} alt="css" className="icon ms-1" />
          </div>
        </a>
        <a href="#js" data-to-scrollspy-id="js">
          <div className="d-flex align-items-center justify-content-center">
            JavaScript <img src={js} alt="javascript" className="icon ms-1" />
          </div>
        </a>
        <a href="#mixed-vanilla" data-to-scrollspy-id="mixed-vanilla">
          <div className="d-flex align-items-center justify-content-center">
            <img src={html} alt="HTML" className="icon ms-1" /> +
            <img src={css} alt="CSS" className="icon ms-1" /> +
            <img src={js} alt="JavaScript" className="icon ms-1" />
          </div>
        </a>
        <a href="#react" data-to-scrollspy-id="react">
          <div className="d-flex align-items-center justify-content-center">
            React <img src={react} alt="react" className="icon ms-1" />
          </div>
        </a>
        <a href="#react-native" data-to-scrollspy-id="react-native">
          <div className="d-flex align-items-center justify-content-center">
            React Native <img src={react} alt="react native" className="icon ms-1" />
          </div>
        </a>
        <a href="#other" data-to-scrollspy-id="other">
          <div className="d-flex align-items-center justify-content-center">
            Other
          </div>
        </a>
        <a href="#end" data-to-scrollspy-id="end">
          End.
        </a>
      </div>
      <div className="content-main">
        <Scrollspy>
          <section id="overview-proj">
            <h1>Projects Overview</h1>
            <div>
              In the list of projects portrayed here are done 100% by me.
            </div>
            <div>
              If there are projects in here that are inspired by someone else's
              work then I will be sure to put their reference.
            </div>
            <div>
              <b>Note:</b> I have done many more projects in other languages,
              the reason why I didn't mention them is because either I am not
              that proud of them or I haven't enjoyed making them or I think
              that they are too basic.
            </div>
          </section>
          <section id="python">
            <h1>
              Python <img src={py} alt="" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("python").map((props, i) => <Project {...props} key={i} />)}
          </section>
          <section id="css">
            <h1>
              CSS <img src={css} alt="" className="icon-outer ms-2" />
            </h1>
            <Project />
          </section>
          <section id="js">
            <h1>
              JavaScript <img src={js} alt="" className="icon-outer ms-2" />
            </h1>
            <Project />
          </section>
          <section id="mixed-vanilla">
            <h1>
              Mixed Vainilla <img src={html} alt="" className="icon-outer ms-2" />{" "}+
              <img src={css} alt="" className="icon-outer ms-2" />{" "}+
              <img src={js} alt="" className="icon-outer ms-2" />
            </h1>
            <Project />
          </section>
          <section id="react">
            <h1>
              React <img src={react} alt="" className="icon-outer ms-2" />
            </h1>
            <Project />
          </section>
          <section id="react-native">
            <h1>
              React Native <img src={react} alt="" className="icon-outer ms-2" />
            </h1>
            <Project />
          </section>
          <section id="other">
            <h1>
              Other
            </h1>
            <Project />
          </section>
          <section id="end">
            <Footer />
          </section>
        </Scrollspy>
      </div>
    </div>
  );
}
