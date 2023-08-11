import React from "react";
import Project from "./components/Project";
import py from "../Assets/Images/python.svg";
import css from "../Assets/Images/css.svg";
import js from "../Assets/Images/js.svg";
import html from "../Assets/Images/html.svg";
import react from "../Assets/Images/react.svg";
import mern from "../Assets/Images/mern2.png";
import django from "../Assets/Images/django.svg";
import axios from "axios";
import Scrollspy from "react-ui-scrollspy";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import useFetch from "../Hook/useFetch";
import ProjectLoader from "./components/ProjectLoader";

export default function ViewDataProj() {
  const { data, loading, error, reFetch } = useFetch();
  // const [projects, setProjects] = useState(data);
  if (error) {
    console.log(error);
  }
  function getProjectsByLang(lang) {
    const filteredProjects = data.filter((p) => p.lang === lang);
    if (filteredProjects.length > 0) {
      return filteredProjects.map((props, i) => (
        <span className="d-flex w-100" key={i}>
          <Project {...props} key={i} />
          <div className="d-flex align-self-start" key={"btns-" + props.id}>
            <Link
              className="btn btn-light ms-2"
              title="update"
              to={`${props.id}`}
            >
              <svg viewBox="0 0 20 20" fill="black" width="30" height="30">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#000000"
                    fillRule="evenodd"
                    d="M15.198 3.52a1.612 1.612 0 012.223 2.336L6.346 16.421l-2.854.375 1.17-3.272L15.197 3.521zm3.725-1.322a3.612 3.612 0 00-5.102-.128L3.11 12.238a1 1 0 00-.253.388l-1.8 5.037a1 1 0 001.072 1.328l4.8-.63a1 1 0 00.56-.267L18.8 7.304a3.612 3.612 0 00.122-5.106zM12 17a1 1 0 100 2h6a1 1 0 100-2h-6z"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
            <button
              className="btn btn-light ms-2"
              onClick={() => deleteProject(props.id)}
              title="Delete"
              type="button"
            >
              <svg
                fill="#000000"
                viewBox="-2.94 0 31.716 31.716"
                width="30"
                height="30"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g transform="translate(-355.957 -579)">
                    {" "}
                    <path d="M376.515,610.716H361.231a2.361,2.361,0,0,1-2.358-2.359V584.1a1,1,0,0,1,2,0v24.255a.36.36,0,0,0,.358.359h15.284a.36.36,0,0,0,.358-.359V584.1a1,1,0,0,1,2,0v24.255A2.361,2.361,0,0,1,376.515,610.716Z"></path>{" "}
                    <path d="M365.457,604.917a1,1,0,0,1-1-1v-14a1,1,0,0,1,2,0v14A1,1,0,0,1,365.457,604.917Z"></path>{" "}
                    <path d="M372.29,604.917a1,1,0,0,1-1-1v-14a1,1,0,0,1,2,0v14A1,1,0,0,1,372.29,604.917Z"></path>{" "}
                    <path d="M380.79,585.1H356.957a1,1,0,0,1,0-2H380.79a1,1,0,0,1,0,2Z"></path>{" "}
                    <path d="M372.79,581h-7.917a1,1,0,1,1,0-2h7.917a1,1,0,0,1,0,2Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
          </div>
        </span>
      ));
    } else {
      if (loading) {
        return <ProjectLoader />;
      } else {
        return <h3 className="m-3">No Projects</h3>;
      }
    }
  }
  async function deleteProject(id) {
    const result = window.confirm(
      `Are you sure you want to delete this project? with Id:${id}`
    );
    if (result) {
      await axios
        .delete(`${process.env.REACT_APP_BACKEND}project/${id}`)
        .then(() => {
          window.alert("Project Delete Successfully.");
        });
    }
  }
  return (
    <div className="d-flex flex-lg-row main">
      <div className="nav-scrollspy projects">
        <h3>Manage projects</h3>
        <a href="#mern-stack" data-to-scrollspy-id="mern-stack">
          <div className="d-flex align-items-center justify-content-center">
            <img src={mern} alt="MERN Stack" className="icon-mern" />
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
        <a href="#django" data-to-scrollspy-id="django">
          <div className="d-flex align-items-center justify-content-center">
            dJango <img src={django} alt="react native" className="icon ms-1" />
          </div>
        </a>
        <a href="#python" data-to-scrollspy-id="python">
          <div className="d-flex align-items-center justify-content-center">
            Python <img src={py} alt="python" className="icon ms-1" />
          </div>
        </a>
        <a href="#mixed-vanilla" data-to-scrollspy-id="mixed-vanilla">
          <div className="d-flex align-items-center justify-content-center">
            <img src={html} alt="HTML" className="icon ms-1" /> +
            <img src={css} alt="CSS" className="icon ms-1" /> +
            <img src={js} alt="JavaScript" className="icon ms-1" />
          </div>
        </a>
        <a href="#js" data-to-scrollspy-id="js">
          <div className="d-flex align-items-center justify-content-center">
            JavaScript <img src={js} alt="javascript" className="icon ms-1" />
          </div>
        </a>
        <a href="#css" data-to-scrollspy-id="css">
          <div className="d-flex align-items-center justify-content-center">
            CSS <img src={css} alt="css" className="icon ms-1" />
          </div>
        </a>
        <a href="#other" data-to-scrollspy-id="other">
          <div className="d-flex align-items-center justify-content-center">
            Other
          </div>
        </a>
      </div>
      <div className="content-main">
        <Search refetch={reFetch}/>
        <Scrollspy componentTag="div">
          <section className="project-section w-100" id="mern-stack">
            <h1>
              MERN Stack{" "}
              <img src={mern} alt="Python" className="icon-outer mern ms-2" />
            </h1>
            {getProjectsByLang("mern-stack")}
          </section>
          <section className="project-section" id="react">
            <h1>
              React <img src={react} alt="React" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("react")}
          </section>
          <section className="project-section" id="react-native">
            <h1>
              React Native{" "}
              <img src={react} alt="React Native" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("react-native")}
          </section>
          <section className="project-section" id="django">
            <h1>
              dJango{" "}
              <img src={django} alt="Python" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("django")}
          </section>
          <section className="project-section" id="python">
            <h1>
              Python <img src={py} alt="" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("python")}
          </section>
          <section className="project-section" id="mixed-vanilla">
            <h1>
              Mixed Vainilla{" "}
              <img src={html} alt="HTML" className="icon-outer ms-2" /> +
              <img src={css} alt="CSS" className="icon-outer ms-2" /> +
              <img src={js} alt="JS" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("mixed-vanilla")}
          </section>
          <section className="project-section" id="js">
            <h1>
              JavaScript <img src={js} alt="JS" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("js")}
          </section>
          <section className="project-section" id="css">
            <h1>
              CSS <img src={css} alt="CSS" className="icon-outer ms-2" />
            </h1>
            {getProjectsByLang("css")}
          </section>
          <section className="project-section" id="other">
            <h1>Other</h1>
            {getProjectsByLang("other")}
          </section>
        </Scrollspy>
      </div>
    </div>
  );
}
