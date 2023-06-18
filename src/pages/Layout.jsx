import { Outlet, NavLink } from "react-router-dom";
// import { useRef } from "react";
import React, { useEffect } from "react";
const Layout = () => {
  function showSideNav(e) {
    e.target.classList.toggle("clicked");
    if (e.target.classList.contains("clicked")) {
      document.querySelector(".nav-scrollspy").style.display = "block";
      // e.target.classList.remove("clicked");
    } else {
      document.querySelector(".nav-scrollspy").style.display = "none";
    }
  }
  var a_link = document.querySelectorAll("a");
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    // Handle mouse over/out event on links
    a_link.forEach((e) => e.addEventListener("mouseenter", handleMouseEnter));
    a_link.forEach((e) => e.addEventListener("mouseleave", handleMouseLeave));
    window.addEventListener("mousemove", handleMouseMove);
    // Move the cursor in dom/window
    function handleMouseMove(event) {
      var top = event.pageY - cursor.clientHeight / 2;
      var left = event.pageX - cursor.clientWidth / 2;
      cursor.style.top = top + "px";
      cursor.style.left = left + "px";
    }
    // event: mouse enter on link
    function handleMouseEnter(event) {
      var _a = this;
      var _a_width = _a.offsetWidth;
      var classes = ["shape1", "shape2", "shape3", "shape4"];
      var shape_class = classes[Math.floor(Math.random() * classes.length)];
      // $('#cursor').css('width', _a_width+'px').addClass('hovered '+cls);
      cursor.style.width = _a_width + "px";
      cursor.classList.add("hovered", shape_class);
    }
    // event: mouse leave on link
    function handleMouseLeave() {
      cursor.style.width = "60px";
      cursor.classList = "";
    }
  }, [a_link]);
  return (
    <>
      <div className="main-content">
        <div id="cursor">
          <div id="circle"></div>
        </div>
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
