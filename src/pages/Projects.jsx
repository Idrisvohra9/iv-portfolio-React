import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Scrollspy from "react-ui-scrollspy";
import Project from "./components/Project";
import ProfileComp from "./components/ProfileComp";
import py from "./Images/python.svg";
import css from "./Images/css.svg";
import js from "./Images/js.svg";
import html from "./Images/html.svg";
import react from "./Images/react.svg";
import { Helmet } from "react-helmet";
import axios from "axios";
import ProjectLoader from "./components/ProjectLoader";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);
  function getProjectsByLang(lang) {
    return projects.filter((p) => {
      return p.lang === lang;
    });
  }
  function searchProjects(e) {
    const SearchValue = e.target.value.toUpperCase();
    const projectCard = document.querySelectorAll(".card.project");

    for (const pc of projectCard) {
      console.log(pc);
      let title = pc.querySelector(".card-header a.btn").innerHTML.toUpperCase();
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
          content="The webpage showcasing all the projects done by me (Idris Vohra)."
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
            <b>It might take a minute to load the projects... Hang on tight! it would be worth it😉.</b>
            <div className="d-flex justify-content-between mt-3 align-items-center">
              <div className="input-group w-50 flex-nowrap">
                <input
                  type="text"
                  placeholder="Find projects"
                  className="input"
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
