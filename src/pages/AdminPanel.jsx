import React from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { getCookie, deleteCookie } from "../tools/cookies";
import { Helmet } from "react-helmet";
export default function AdminPanel() {
  const { token } = useParams();
  function showSideNav(e) {
    e.target.classList.toggle("clicked");
    if (e.target.classList.contains("clicked")) {
      document.querySelector(".nav-scrollspy").style.display = "block";
      // e.target.classList.remove("clicked");
    } else {
      document.querySelector(".nav-scrollspy").style.display = "none";
    }
  }
  if (getCookie("token") === token)
    return (
      <div className="container mt-4">
        <Helmet>
          <title>Idris Vohra - Control Dashboard</title>
          <meta name="description" content="Admin Panel for iv-portfolio." />
        </Helmet>
        <h1>Admin Panel</h1>
        <div className="d-flex justify-content-between">
          <h3>Welcome Idris Vohra!</h3>

          <i className="bi bi-list" onClick={showSideNav}></i>
          <button
            className="btn btn-dark d-flex justify-content-center align-items-center"
            onClick={() => {
              deleteCookie("token");
              window.location.reload();
            }}
            title="Logout"
          >
            <svg
              height="20px"
              width="20px"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
              fill="white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"> </style>{" "}
                <g>
                  {" "}
                  <path
                    className="st0"
                    d="M423.262,91.992c-16.877-15.91-43.434-15.098-59.32,1.778c-15.894,16.877-15.098,43.434,1.779,59.32 c32.082,30.213,49.754,71.238,49.754,115.5c0,87.934-71.541,159.476-159.476,159.476S96.525,356.524,96.525,268.59 c0-44.262,17.668-85.287,49.754-115.5c16.877-15.885,17.672-42.442,1.779-59.32c-15.885-16.885-42.455-17.688-59.32-1.778 C40.344,137.557,12.59,201.926,12.59,268.59C12.59,402.803,121.783,512,256,512c134.213,0,243.41-109.197,243.41-243.41 C499.41,201.926,471.656,137.557,423.262,91.992z"
                  ></path>{" "}
                  <path
                    className="st0"
                    d="M256,268.59c23.178,0,41.967-15.033,41.967-33.574V33.574C297.967,15.033,279.178,0,256,0 c-23.178,0-41.967,15.033-41.967,33.574v201.443C214.033,253.557,232.822,268.59,256,268.59z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <nav className="IV-nav">
            <ul className="d-flex flex-row justify-content-evenly">
              <li>
                <NavLink to="add" className="tab">
                  Add new project
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="tab">
                  Show all projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Outlet />
      </div>
    );
  else {
    return (
      <div
        className="container mt4 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h2>Invalid Personnel!</h2>
      </div>
    );
  }
}
