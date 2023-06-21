import { useEffect, useState } from "react";
import axios from "axios";
import hljs from "highlight.js";
import "highlight.js/styles/base16/onedark.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

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
    ["link"],
    ["clean"],
  ], // Include button in toolbar
};
export default function AddProject() {
  const { request } = useParams();
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    lang: "python",
    htmlId: "",
    github: "",
    codepen: "",
    skill: "beginner",
  });
  const [Images, setImages] = useState([]);
  const placeholder = request !== "add" ? "update" : "add";
  const id = request !== "add" ? request : null;
  useEffect(() => {
    if (placeholder === "update") {
      // Get the old values for updating
      axios
        .get(`${process.env.REACT_APP_BACKEND}project/${id}`)
        .then(({ data }) => setProjectData(data))
        .catch((err) => window.alert(err));
    }
  }, [id, placeholder]);
  const addProject = async (e) => {
    // const formData = new FormData();

    e.preventDefault();
    if (request === "add") {
      if (Images.length > 0) {
        for (let i = 0; i < Images.length; i++) {
          await uploadBytes(
            ref(storage, `${projectData.htmlId}/${Images[i].name}`),
            Images[i]
          );
        }
      }
      await axios.post(`${process.env.REACT_APP_BACKEND}project`, projectData);
      alert("Uploaded");
    } else {
      await axios
        .patch(`${process.env.REACT_APP_BACKEND}project/${id}`, projectData)
        .then(({ success }) =>
          success ? document.querySelector(".toast").classList.add("show") : ""
        )
        .catch((err) => window.alert(err));
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
      <form onSubmit={addProject} className="mb-2 container">
        <div
          className="toast align-items-center"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              The operation was successful click here to{" "}
              <button
                className="btn btn-dark"
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
            <button
              type="button"
              className="btn-close me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Title*:</span>
          <input
            type="text"
            className="form-control"
            value={projectData?.title}
            required
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
            value={projectData?.lang}
            required
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
        <div className="input-group mb-3">
          <span className="input-group-text">Skill*:</span>
          <select
            className="form-select"
            aria-label="Default select example"
            value={projectData?.skill}
            required
            onChange={(e) =>
              setProjectData({ ...projectData, skill: e.target.value })
            }
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="post-body" className="form-label">
            Project Body*
          </label>
          <ReactQuill
            className="bg-light input"
            value={projectData?.description}
            required
            onChange={(newValue) =>
              setProjectData({ ...projectData, description: newValue })
            }
            modules={modules}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">I/O Images:</span>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImages(e.target.files)}
            multiple
            accept=".gif, .jpeg, .jpg, .png, .webp"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Github Link:</span>
          <input
            type="text"
            className="form-control"
            value={projectData?.github}
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
            value={projectData?.codepen}
            onChange={(e) =>
              setProjectData({ ...projectData, codepen: e.target.value })
            }
          />
        </div>
        <div className="d-flex justify-content-evenly align-items-center">
          <input
            type="submit"
            className="btn btn-success"
            value={request === "add" ? "Add Project" : "Update"}
          />
        </div>
      </form>
    </>
  );
}
