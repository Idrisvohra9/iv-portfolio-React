import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="container mt-4">
        <h1>Admin Panel</h1>
        <h2>Welcome Idris Vohra!</h2>
        <div className="d-flex justify-content-center">
          <nav className="admin-nav">
            <ul className="d-flex flex-row justify-content-evenly">
              <li>
                <NavLink
                  to="/adminPanel/addProjects"
                  className={`tab ${({ isActive }) =>
                    isActive ? "Active" : ""}`}
                >
                  Add new projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/adminPanel/showProjects"
                  className={`tab ${({ isActive }) =>
                    isActive ? "Active" : ""}`}
                >
                  Show all projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Outlet />
    </div>
  );
}
