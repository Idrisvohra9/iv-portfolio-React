import React from "react";
import git from "../Images/git-light.svg";
import cp from "../Images/codepen.svg";
import DOMPurify from "dompurify";
export default function Project({
  title,
  projBody,
  htmlId,
  github,
  codepen,
  skill,
}) {
  return (
    <div className="card project">
      <div className="card-header">
        <a className="btn" data-bs-toggle="collapse" href={`#${htmlId}`}>
          {title} <span className="text-muted ms-1">[{skill}]</span>
        </a>
      </div>
      <div id={`${htmlId}`} className="collapse">
        <div className="card-body">
          <h4>Project Description:</h4>
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(projBody) }}
          ></div>
        </div>
        <div className="w-100 d-flex justify-content-end align-items-center pe-3 text-dark">
          <div className="d-flex justify-content-evenly align-items-center">
            {github.length > 0 ? (
              <>
                <span className="text-muted me-2">Find Project:</span>
                <a
                  href={github}
                  className="btn btn-dark"
                  title="Open In Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={git} alt="Github Icon" className="icon-inner" />
                </a>
              </>
            ) : (
              <span className="text-muted">Private Project</span>
            )}
            {codepen.length > 0 ? (
              <a
                href={codepen}
                className="btn btn-primary ms-2"
                title="Open In Codepen"
                target="_blank"
                rel="noreferrer"
              >
                <img src={cp} alt="Codepen Icon" className="icon-inner" />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  title: "Project Title",
  description: "Some description",
  io_images: [],
  htmlId: "SomeId",
  github: "",
  codepen: "",
  note: "",
};
