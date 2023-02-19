import React, { Component, createRef } from "react";
import pJSON from "./Projects.json";

export default class AddProject extends Component {
  constructor() {
    super();
    this.title = createRef();
    this.desc = createRef();
    this.note = createRef();
    this.lang = createRef();
    this.htmlId = createRef();
    this.gLink = createRef();

  }

  nextId() {
    let projects = pJSON;
    var pId = projects.length;
    return pId++;
  }
  addProject() {
    let title = this.title.current.value;
    let desc = this.desc.current.value;
    let note = this.note.current.value;
    let lang = this.lang.current.value;
    let htmlId = this.htmlId.current.value;
    let gLink = this.gLink.current.value;
    window.prompt(
      `Id: ${this.nextId()}, Title: ${title}, Description: ${desc}, Note: ${note}, lang: ${lang}, htmlId: ${htmlId}, gLink: ${gLink}`
    );
  }
  render() {
    return (
      <>
        <h2>Add New project:</h2>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Title*:
            </span>
            <input type="text" className="form-control" ref={this.title} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Description*:</span>
            <textarea className="form-control" ref={this.desc}></textarea>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Note:
            </span>
            <input type="text" className="form-control" ref={this.note} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Language*:</span>
            <select
              className="form-select"
              aria-label="Default select example"
              ref={this.lang}
              defaultValue="Open this select menu"
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
            <span className="input-group-text">HtmlId*:</span>
            <input type="text" className="form-control" ref={this.htmlId} />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Github Link:</span>
            <input type="text" className="form-control" ref={this.gLink} />
          </div>
          <div className="d-flex justify-content-evenly align-items-center">
            <button className="btn btn-success" onClick={() => this.addProject()}>
              Add Project
            </button>
            <input type="reset" value="Clear" className="btn btn-danger" />
          </div>
        </form>
      </>
    );
  }
}
