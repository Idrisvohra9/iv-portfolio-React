import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AutoTyper() {
  return (
    <div className="autoType">
      I am a
      {/* eslint-disable-next-line */}
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          1000,
          "Software Developer",
          1000,
          "Cool guy maybe",
          1000,
          "Writer",
          1000,
          "Content Creator",
          1000,
          "Blogger",
          1000,
        ]}
        wrapper="b"
        cursor={false}
        repeat={Infinity}
        speed={10}
      ></TypeAnimation>
    </div>
  );
}
