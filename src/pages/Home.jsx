import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const turt = useRef();
  const heading = useRef();
  const btn = useRef();
  const tentac = useRef();
  const navigate = useNavigate();
  function scrollSmoothed() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  const { clientHeight } = document.documentElement;

  // console.log(clientHeight / 2);
  // Use useEffect when we want to add a event listener on window so that it
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      heading.current.style.top = 220 - value + "px";
      tentac.current.style.left = -60 - value + "px";
      turt.current.style.top = 60 - value + "px";
      turt.current.style.right = 210 - value + "px";

      // console.log("Value:",Number.parseInt(value)-5);
      // console.log("Height:", clientHeight / 2);
      // console.log(Number.parseInt(value)-5 === clientHeight / 2);
      if (Number.parseInt(value) >= clientHeight / 2 - 10) {
        // console.log("End");
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
          <h1 className="heading" ref={heading}>
            Idris Vohra
          </h1>
          <div className="d-flex justify-content-center">
            <button className="button" ref={btn} onClick={scrollSmoothed}>
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
          // loading="lazy"
        />
        <img
          src={require("./Images/ForegroundReefs.webp")}
          alt=""
          className="parallax-image img-fluid reefs"
          // loading="lazy"
        />
        <img
          src={require("./Images/Fishes.webp")}
          alt=""
          className="parallax-image img-fluid fishes"
          // loading="lazy"
        />
        <img
          src={require("./Images/turtle.webp")}
          alt=""
          className="img-fluid turtle"
          // loading="lazy"
          ref={turt}
        />
        <img
          src={require("./Images/tentacles.webp")}
          alt=""
          className="parallax-image img-fluid tentacles"
          // loading="lazy"
          ref={tentac}
        />
        <h1 className="heading" ref={heading}>
          Idris Vohra
        </h1>
        <div className="d-flex justify-content-center">
          <button className="button" ref={btn} onClick={scrollSmoothed}>
            {" "}
            Explore
          </button>
        </div>
      </header>
      <div className="spacer"></div>
    </>
  );
}
