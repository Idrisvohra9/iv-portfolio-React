import React, { useEffect, useState } from "react";
import axios from "axios";
import hljs from "highlight.js";
import "highlight.js/styles/base16/onedark.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router";
hljs.configure({
  languages: ["javascript", "css", "scss", "python", "html", "php"],
});
const highlightCode = (input) => {
  return hljs.highlightAuto(input).value;
};
const modules = {
  syntax: {
    highlight: (text) => highlightCode(text),
  }, // Include syntax module
  toolbar: [
    [{ header: [4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["code-block"],
    ["link", "image"],
    ["clean"],
  ], // Include button in toolbar
};
export default function AddProject() {
  const [projectData, setProjectData] = useState({
    title: "",
    projBody: "",
    lang: "python",
    htmlId: "",
    github: "",
    codepen: "",
  });
  const { request } = useParams();
  const placeholder = request != "add" ? "update" : "add";
  const id = request != "add" ? request : null;
  useEffect(() => {
    if(placeholder === "update"){
      axios.get(`${process.env.REACT_APP_BACKEND}project`)
    }
  }, []);
  const addProject = (e) => {
    e.preventDefault();
    if (request === "add") {
      axios
        .post(`${process.env.REACT_APP_BACKEND}projects`, projectData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          window.alert(err);
        });
    }
    else{
      // axios.
    }
  };
  function createHtmlId(title = "") {
    const regex = /[^a-zA-Z0-9_-]/g; // Replacing the special characters excluding hyphens and underscore with hyphens and
    // Replace multiple consecutive hyphens with a single hyphen
    const hyphenRegex = /-+/g;
    let slug = title.replace(regex, "-").replace(hyphenRegex, "-");
    if (slug.endsWith("-")) {
      slug = slug.slice(0, slug.length - 1);
    }
    return slug;
  }
  return (
    <>
      <h1 className="mb-3">
        {placeholder} Project {id !== null ? "with id = " + id : ""}:
      </h1>
      <form onSubmit={addProject} className="mb-2">
        <div className="input-group mb-3">
          <span className="input-group-text">Title*:</span>
          <input
            type="text"
            className="form-control"
            value={projectData.title}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                title: e.target.value,
                htmlId: createHtmlId(e.target.value),
              })
            }
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Language*:</span>
          <select
            className="form-select"
            aria-label="Default select example"
            value={projectData.lang}
            onChange={(e) =>
              setProjectData({ ...projectData, lang: e.target.value })
            }
          >
            <option value="python">python</option>
            <option value="css">css</option>
            <option value="js">js</option>
            <option value="mixed-vanilla">mixed-vanilla</option>
            <option value="react">react</option>
            <option value="react-native">react-native</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="post-body" className="form-label">
            Project Body*
          </label>
          <ReactQuill
            className="bg-light input"
            value={projectData.projBody}
            onChange={(newValue) =>
              setProjectData({ ...projectData, projBody: newValue })
            }
            modules={modules}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Github Link:</span>
          <input
            type="text"
            className="form-control"
            value={projectData.github}
            onChange={(e) =>
              setProjectData({ ...projectData, github: e.target.value })
            }
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Codepen Link:</span>
          <input
            type="text"
            className="form-control"
            value={projectData.codepen}
            onChange={(e) =>
              setProjectData({ ...projectData, codepen: e.target.value })
            }
          />
        </div>
        <div className="d-flex justify-content-evenly align-items-center">
          <input
            type="submit"
            className="btn btn-success"
            value="Add Project"
          />
        </div>
      </form>
    </>
  );
}
