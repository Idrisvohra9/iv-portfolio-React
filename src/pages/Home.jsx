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
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      const heading = [...document.getElementsByClassName("heading")];

      if (heading) {
        heading.forEach((head)=> head.style.top = 220 - value + "px");
        document.getElementById("tentacles").style.left = -60 - value + "px";
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
      <header className="header-sm">
        <section>
          <div className="d-flex justify-content-center align-items-end h-100">
            <p style={{ color: "#0f1b33", width: "75%" }}>
              {" "}
              <b>Note</b>: This page has parallax effect that can only be
              experienced in screen with large size.
            </p>
          </div>
        </section>
        <section>
          <h1 className="heading">Idris Vohra</h1>
          <div className="d-flex justify-content-center">
            <button className="button" onClick={scrollSmoothed}>
              {" "}
              Explore
            </button>
          </div>
        </section>
        <section></section>
        <div className="spacer"></div>
      </header>
      <header style={{ scrollBehavior: "smooth" }} className="header-lg">
        <img
          src={require("./Images/ColorBackground.webp")}
          alt=""
          className="parallax-image img-fluid background"
        />
        <img
          src={require("./Images/ForegroundReefs.webp")}
          alt=""
          className="parallax-image img-fluid reefs"
        />
        <img
          src={require("./Images/Fishes.webp")}
          alt=""
          className="parallax-image img-fluid fishes"
        />
        <img
          src={require("./Images/turtle.webp")}
          alt=""
          className="img-fluid turtle"
        />
        <img
          src={require("./Images/tentacles.webp")}
          alt=""
          className="parallax-image img-fluid tentacles"
          id="tentacles"
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
