import { Outlet, NavLink } from "react-router-dom";
// import { useRef } from "react";

const Layout = () => {
  return (
    <>
      <div className="main-content">
        <div className="d-flex justify-content-center">
          <nav className="IV-nav">
            <ul className="d-flex flex-row justify-content-evenly">
              <li>
                <NavLink
                  to="/profile"
                  className={`tab ${({ isActive }) =>
                    isActive ? "Active" : ""}`}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={`tab ${({ isActive }) =>
                    isActive ? "Active" : ""}`}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`tab ${({ isActive }) =>
                    isActive ? "Active" : ""}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
