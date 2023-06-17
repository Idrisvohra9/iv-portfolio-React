import React from "react";
import youtube from "../Images/youtube.svg";
import instagram from "../Images/instagram.svg";
import github from "../Images/github.svg";
import octopus from "../Images/octopus.svg";
import twitter from "../Images/twitter.svg";
import linkedin from "../Images/linkedin.svg";

import idris from "../Images/Idris.jpg";

export default function ProfileComp() {
  return (
    <div className="container-social">
      <div className="container-pic">
        <div className="icon">
          <a
            href="https://www.youtube.com/channel/UC7WlFhckErZwpHZ5EB7mImw"
            target="_blank"
            rel="noreferrer"
            className="imgBx"
            style={{ "--i": 1 }}
            title="Youtube"
          >
            <img src={youtube} alt="Youtube" />
          </a>
          <a
            href="https://www.instagram.com/idris_haider/"
            target="_blank"
            rel="noreferrer"
            className="imgBx"
            style={{ "--i": 2 }}
            title="Instagram"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://github.com/Idrisvohra9"
            target="_blank"
            rel="noreferrer"
            className="imgBx"
            style={{ "--i": 3 }}
            title="GitHub"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://themellowcoder.com/#"
            target="_blank"
            rel="noreferrer"
            className="imgBx"
            style={{ "--i": 4 }}
            title="themellowcoder"
          >
            <img src={octopus} alt="themellowcoder" />
          </a>
          <a
            href="https://twitter.com/themellowcoder"
            target="_blank"
            rel="noreferrer"
            className="imgBx"
            style={{ "--i": 5 }}
            title="Twitter"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/idris-vohra-589106256/"
            target="_blank"
            rel="noreferrer"
            className="imgBx"
            style={{ "--i": 6 }}
            title="linkedIn"
          >
            <img src={linkedin} alt="linkedIn" />
          </a>
        </div>
        <div className="content">
          <div className="contentBx">
            <img src={idris} alt="Idris Vohra" title="Idris Vohra" />
          </div>
        </div>
      </div>
    </div>
  );
}
