import React from "react";
import git from "../Images/github.svg";
export default function Project({
  title,
  description,
  note,
  io_images,
  htmlId,
  github,
}) {
  return (
    <div className="card project">
      <div className="card-header">
        <a className="btn" data-bs-toggle="collapse" href={`#${htmlId}`}>
          {title}
        </a>
      </div>
      <div id={`${htmlId}`} className="collapse">
        <div className="card-body">
          <h4>Description:</h4>
          <div>{description}</div>
          {note.length > 0 ? (
            <div className="mt-3">
              <b>Note:</b> {note}
            </div>
          ) : (
            ""
          )}
          <h4 className="mt-3">I/O Screen Shots:</h4>
          {io_images.map((img, i) => {
            return <img src={require("."+img)} alt="" className="img-fluid io_images" key={i} loading="lazy"/>
          })}
        </div>
        <div className="w-100 d-flex justify-content-end align-items-center pe-3 text-dark">
          {github.length > 0 ? (
            <a
              href={github}
              style={{ background: "transparent" }}
              title="Open Source code in Github"
            >
              <img src={git} alt="" className="icon-inner" />
            </a>
          ) : (
            "Private Project"
          )}
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
  note: "",
};
