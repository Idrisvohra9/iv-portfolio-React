import React, { useState } from "react";
import Footer from "./components/footer";
import Scrollspy from "react-ui-scrollspy";
import Project from "./components/Project";
import ProfileComp from "./components/ProfileComp";
import py from "../Assets/Images/python.svg";
import css from "../Assets/Images/css.svg";
import js from "../Assets/Images/js.svg";
import html from "../Assets/Images/html.svg";
import react from "../Assets/Images/react.svg";
import { Helmet } from "react-helmet";
import ProjectLoader from "./components/ProjectLoader";

export default function Projects({ ProjData }) {
  function getProjectsByLang(lang) {
    return ProjData.data.filter((p) => {
      return p.lang === lang;
    });
  }
  function searchProjects(e) {
    const SearchValue = e.target.value.toUpperCase();
    const projectCard = document.querySelectorAll(".card.project");

    for (const pc of projectCard) {
      console.log(pc);
      let title = pc
        .querySelector(".card-header a.btn")
        .innerHTML.toUpperCase();
      if (title.includes(SearchValue)) {
        pc.style.display = "block";
      } else {
        pc.style.display = "none";
      }
    }
  }
  return (
    <div className="d-flex flex-lg-row main">
      <Helmet>
        <title>Idris Vohra - All Projects</title>
        <meta
          name="description"
          content="The webpage showcasing all the data.data done by me (Idris Vohra)."
        />
        <meta
          name="keywords"
          content="Projects, Showcase, Idris Vohra, Idris, iv-portfolio, HTML5, CSS, React, React Native, JavaScript, Web developer, Application developer"
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
            React Native{" "}
            <img src={react} alt="react native" className="icon ms-1" />
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
              Below is a curated list of projects I have personally developed.
            </div>
            <div>
              While some projects may draw inspiration from the work of others,
              I always provide proper references and credit.
            </div>
            <div>
              Please <b>note</b> that this is not an exhaustive list, and I have
              worked on numerous projects in other programming languages as
              well. However, I have chosen to highlight the projects that I am
              particularly proud of, enjoyed working on, or consider more
              advanced.
            </div>
            <b>
              The projects may take a moment to load, but I assure you it will
              be worth the wait. 😉
            </b>
            <div className="d-flex justify-content-between mt-3 align-items-center">
              <div className="input-group w-50 flex-nowrap">
                <input
                  type="text"
                  placeholder="Find projects"
                  className="search-input"
                  onChange={searchProjects}
                />
                <span className="input-group-text search-btn bi-search"></span>
              </div>
            </div>
          </section>
          <section id="python">
            <h1>
              Python <img src={py} alt="Python" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("python").length > 0 ? (
              getProjectsByLang("python").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="css">
            <h1>
              CSS <img src={css} alt="CSS" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("css").length > 0 ? (
              getProjectsByLang("css").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="js">
            <h1>
              JavaScript <img src={js} alt="JS" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("js").length > 0 ? (
              getProjectsByLang("js").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="mixed-vanilla">
            <h1>
              Mixed Vainilla{" "}
              <img src={html} alt="HTML" className="icon-outer ms-2" /> +
              <img src={css} alt="CSS" className="icon-outer ms-2" /> +
              <img src={js} alt="JavaScript" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("mixed-vanilla").length > 0 ? (
              getProjectsByLang("mixed-vanilla").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="react">
            <h1>
              React <img src={react} alt="React" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("react").length > 0 ? (
              getProjectsByLang("react").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="react-native">
            <h1>
              React Native{" "}
              <img src={react} alt="React Native" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("react-native").length > 0 ? (
              getProjectsByLang("react-native").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="other">
            <h1>Other</h1>
            {getProjectsByLang("other").length > 0 ? (
              getProjectsByLang("other").map((props, i) => (
                <Project {...props} key={i} />
              ))
            ) : (
              <ProjectLoader />
            )}
          </section>
          <section id="end">
            <Footer />
          </section>
        </Scrollspy>
      </div>
    </div>
  );
}
