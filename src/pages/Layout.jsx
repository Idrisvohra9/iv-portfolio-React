import { Outlet, NavLink } from "react-router-dom";
// import { useRef } from "react";

const Layout = () => {
  function showSideNav(e){
    e.target.classList.toggle("clicked");
    if(e.target.classList.contains("clicked")){
      document.querySelector(".nav-scrollspy").style.display="block";
      // e.target.classList.remove("clicked");
    }
    else{
      document.querySelector(".nav-scrollspy").style.display="none";
    }
  }
  return (
    <>
      <div className="main-content">
        <i className="bi bi-list" onClick={showSideNav}></i>
        <div className="d-flex justify-content-center">
          <nav className="IV-nav">
            <ul className="d-flex flex-row justify-content-evenly">
              <li>
                <NavLink to="/profile" className="tab">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="tab">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="tab">
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
