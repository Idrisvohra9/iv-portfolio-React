import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const turt = useRef();
  const heading = useRef();
  const btn = useRef();
  const tentac = useRef();
  const url = useRef();
  const smoothScroll = () => {
    let scroll = setInterval(() => {
      window.scrollY++;
      window.scrollTo(0, window.scrollY);
      if (window.scrollY === window.innerHeight-5) {
        clearInterval(scroll);
        url.current.click();
      }
    }, 2);
  };
  // Use useEffect when we want to add a event listener on window so that it
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      heading.current.style.top = 220 - value + "px";
      tentac.current.style.left = -60 - value + "px";
      turt.current.style.top = 60 - value + "px";
      turt.current.style.right = 210 - value + "px";
    });
  }, []);
  return (
    <>
      <header>
        <img
          src={require("./Images/ColorBackground.webp")}
          alt=""
          className="parallax-image img-fluid background"
          loading="lazy"
        />
        <img
          src={require("./Images/ForegroundReefs.webp")}
          alt=""
          className="parallax-image img-fluid reefs"
          loading="lazy"
        />
        <img
          src={require("./Images/Fishes.webp")}
          alt=""
          className="parallax-image img-fluid fishes"
          loading="lazy"
        />
        <img
          src={require("./Images/turtle.webp")}
          alt=""
          className="img-fluid turtle"
          loading="lazy"
          ref={turt}
        />
        <img
          src={require("./Images/tentacles.webp")}
          alt=""
          className="parallax-image img-fluid tentacles"
          loading="lazy"
          ref={tentac}
        />
        <h1 className="heading" ref={heading}>
          Idris Vohra
        </h1>
        <div className="d-flex justify-content-center">
          <button className="button" ref={btn} onClick={() => smoothScroll()}>
            {" "}
            Explore
          </button>
        </div>
        <Link to="/profile" style={{opacity:0}} ref={url}></Link>
      </header>
      <div className="spacer"></div>
    </>
  );
}

