import React from "react";

export default function Search() {
  function searchProjects(e) {
    const SearchValue = e.target.value.toUpperCase();
    const projectCard = document.querySelectorAll(".card.project");
    const projectSections = [
      ...document.getElementsByClassName("project-section"),
    ];
    if(SearchValue.length > 0) {
      projectSections.map((section) => (section.style.display = "none"));
    } else{
      projectSections.map((section) => (section.style.display = "block"));
    }
    for (const pc of projectCard) {
      let title = pc
        .querySelector(".card-header a.btn")
        .innerHTML.replace(`<SPAN CLASS="TEXT-MUTED MS-1">[`, "")
        .replace("]</SPAN>", "")
        .toUpperCase();
        let parentElem = pc.parentElement;
        // console.log(parentElem.tagName)
        if(parentElem.tagName !== "SECTION"){
            parentElem = pc.parentElement.parentElement;
        }
      if (title.includes(SearchValue)) {
        parentElem.style.display = "block";
        pc.style.display = "block";
      } else {
        pc.style.display = "none";
      }
    }
  }
  return (
    <div className="d-flex justify-content-between mt-3 align-items-center">
      <div className="input-group w-50 flex-nowrap">
        <input
          type="text"
          placeholder="Find projects"
          className="search-input"
          onChange={searchProjects}
        />
        <span className="input-group-text search-btn bi-search"></span>
      </div>
    </div>
  );
}
