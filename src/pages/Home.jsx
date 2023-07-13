import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function scrollSmoothed() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  const { clientHeight } = document.documentElement;

  useEffect(() => {
    // console.log();
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      document
        .querySelectorAll(".heading")
        .forEach((head) => (head.style.top = 220 - value + "px"));
      
      // If small screen:
      if (document.querySelector(".header-sm").checkVisibility()) {
        document.querySelector(".layer1").style.top = -20 - value + "px";
        document.querySelector(".layer2").style.top = -20 + value + "px";
        document.querySelector(".moon").style.left = -40 + value + "px";
        document.querySelector(".birds").style.left = 0 + value + "px";
      } else {
        document.querySelector(".tentacles").style.left = -60 - value + "px";
        document.querySelector(".turtle").style.top = 60 - value + "px";
        document.querySelector(".turtle").style.right = 210 - value + "px";
      }

      if (Number.parseInt(value) >= clientHeight / 2 - 10) {
        navigate("/profile");
      }
    });
  }, [clientHeight, navigate]);
  return (
    <>
      <Helmet>
        <title>Idris Vohra - Landing</title>
        <meta name="description" content="Landing Page for iv-portfolio" />
      </Helmet>
      <header className="header-sm" style={{ scrollBehavior: "smooth" }}>
        <div className="starfall">
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
        </div>

        <div className="background2">
          <img
            src={require("../Assets/Images/layer1.png")}
            alt="Parallax Image"
            className="parallax-image img-fluid layer1"
          />
          <img
            src={require("../Assets/Images/layer2.png")}
            alt="Parallax Image"
            className="parallax-image img-fluid layer2"
          />
          <img
            src={require("../Assets/Images/moon.png")}
            alt="Parallax Image"
            className="parallax-image img-fluid moon"
          />
          <img
            src={require("../Assets/Images/birds.png")}
            alt="Parallax Image"
            className="parallax-image img-fluid birds"
          />
        </div>
        <h1 className="heading">Idris Vohra</h1>
        <div className="d-flex justify-content-center">
          <button className="button" onClick={scrollSmoothed}>
            {" "}
            Explore
          </button>
        </div>
        <div className="spacer"></div>
      </header>
      <header style={{ scrollBehavior: "smooth" }} className="header-lg">
        <img
          src={require("../Assets/Images/ColorBackground.webp")}
          alt="Parallax Image"
          className="parallax-image img-fluid background"
        />
        <img
          src={require("../Assets/Images/ForegroundReefs.webp")}
          alt="Parallax Image"
          className="parallax-image img-fluid reefs"
        />
        <img
          src={require("../Assets/Images/Fishes.webp")}
          alt="Parallax Image"
          className="parallax-image img-fluid fishes"
        />
        <img
          src={require("../Assets/Images/turtle.webp")}
          alt="Parallax Image"
          className="img-fluid turtle"
        />
        <img
          src={require("../Assets/Images/tentacles.webp")}
          alt="Parallax Image"
          className="parallax-image img-fluid tentacles"
        />
        <h1 className="heading">Idris Vohra</h1>
        <div className="d-flex justify-content-center">
          <button className="button" onClick={scrollSmoothed}>
            {" "}
            Explore
          </button>
        </div>
      </header>
      <div className="spacer"></div>
    </>
  );
}
