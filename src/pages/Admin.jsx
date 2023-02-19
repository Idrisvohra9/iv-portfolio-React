import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const username = useRef();
  const pass = useRef();
  const alert = useRef();
  const adminP = useRef();
  const Authenticate = () => {
    var uname = username.current.value;
    var passwd = pass.current.value;
    if (uname === "IdrisAdmin" && passwd === "Idrisdgr8") {
      adminP.current.click()
    } else {
      alert.current.style.display = "block";
      alert.current.className += " show";
    }
  };
  return (
    <div className="container-admin">
      <form method="Post">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">
                <h4>Admin Login</h4>
              </th>
            </tr>
            <tr>
              <td colSpan="2">
                <div
                  className="alert alert-danger alert-dismissible fade"
                  role="alert"
                  style={{width: "70%", display: "none"}}
                  ref={alert}
                >
                  <strong>You shouldn't try again! </strong>You don't seem to be authorised. 
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="u">Username :</label>
              </td>
              <td>
                <input type="text" id="u" ref={username} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Password :</label>
              </td>
              <td>
                <input type="password" id="pass" ref={pass} />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="Login"
                  className="btn"
                  onClick={() => Authenticate()}
                />
              </td>
              <td>
                <input type="reset" value="Reset" className="btn" />
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/adminPanel" ref={adminP}></Link>
      </form>
    </div>
  );
}
