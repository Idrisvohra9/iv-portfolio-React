import React from "react";
import pJSON from "./Projects.json";

export default function ViewDataProj() {
  const Projects = pJSON;
  return (
    <>
      <h3>All the projects</h3>
      <div className="table-container">
        <table className="table table-dark table-striped table-hover overflow-scroll">
          <tbody className="projects-table">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Note</th>
              <th>I/O Images</th>
              <th>Lang</th>
              <th>Html Id</th>
              <th>Github URL</th>
              <th>Actions</th>
            </tr>
            {Projects.map((proj, i) => (
              <tr key={i}>
                <td>{proj.id}</td>
                <td>{proj.title}</td>
                <td>{proj.description}</td>
                <td>{proj.note}</td>
                <td>{proj.io_images}</td>
                <td>{proj.lang}</td>
                <td>{proj.htmlId}</td>
                <td>{proj.github}</td>
                <td>
                  <button className="btn btn-success">Update</button>
                  <button className="btn btn-warning ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
