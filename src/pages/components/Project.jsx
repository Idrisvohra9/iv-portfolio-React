import React from "react";
import github from "../Images/github.svg";
export default function Project({
  title,
  desc,
  io_images,
  htmlId,
  github_url,
  note,
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
          <div>{desc}</div>
          {note.length > 0 ? (
            <div>
              <b>Note:</b> {note}
            </div>
          ) : (
            ""
          )}
          <h4>I/O Screen Shots:</h4>
          {io_images.map((img) => {
            return <img src={img} alt="" className="img-fluid io_images" />;
          })}
        </div>
        <div className="w-100 d-flex justify-content-end align-items-center pe-3 text-dark">
          {github_url.length > 0 ? 
            <a
              href={github_url}
              style={{ background: "transparent" }}
              title="Open Source code in Github"
            >
              <img src={github} alt="" className="icon-inner" />
            </a>
           : 
            "Private Project"
          }
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  title: "Project Title",
  desc: "Some description",
  io_images: [],
  htmlId: "SomeId",
  github_url: "",
  note: "",
};
