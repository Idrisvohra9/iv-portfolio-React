import { useEffect, useState } from "react";
import git from "../Images/git-light.svg";
import cp from "../Images/codepen.svg";
import DOMPurify from "dompurify";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
export default function Project({
  title,
  description,
  htmlId,
  github,
  codepen,
  skill,
}) {
  const [ImageList, setImageList] = useState([]);
  const ImageListRef = ref(storage, `${htmlId}/`);
  useEffect(() => {
    listAll(ImageListRef)
      .then((res) => {
        const promises = res.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        const uniqueUrls = Array.from(new Set(urls));
        setImageList(uniqueUrls);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching image URLs:", error);
      });
  }, []);

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
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          ></div>
          {ImageList.length > 0 && (
            <>
              <h4>I/O Images:</h4>
              {ImageList.map((url, k) => {
                return (
                  <img
                    src={url}
                    loading="lazy"
                    alt="Project Media Assets"
                    key={k}
                  />
                );
              })}
            </>
          )}
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
