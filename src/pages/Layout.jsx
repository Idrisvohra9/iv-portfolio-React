import { Outlet, NavLink } from "react-router-dom";
import React from "react";
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

  const audio = new Audio(require("../Assets/Music/MyMusic.mp3"));
  audio.addEventListener("ended", () => {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play(); // Start playing the audio again
  });
  function playMusic(e) {
    // e.preventPropagation();
    let icon = "bi-play-fill";

    if (e.target.classList.contains(icon)) {
      audio.play();
      // console.log("Music Played");
      e.target.classList.remove(icon);
      icon = "bi-pause-fill";
      e.target.classList.add(icon);
    } else {
      // console.log("Music Paused");
      audio.pause();
      e.target.classList.remove(icon);
      icon = "bi-play-fill";
      e.target.classList.add(icon);
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
        <div className="button-container">
          <button
            type="button"
            className="play-button"
            title="Play/Pause"
            >
            <i
              className="bi bi-play-fill"
              style={{ color: "white", fontSize: "2rem" }}
              onClick={playMusic}
            ></i>
          </button>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
