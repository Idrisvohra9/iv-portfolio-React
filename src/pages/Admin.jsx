import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../tools/cookies";
import { Helmet } from "react-helmet";

export default function Admin() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const alert = useRef();
  const [tries, setTries] = useState(3);
  useEffect(() => {
    if (getCookie("token").length > 10) {
      console.log(true);
      navigate(`/admin/dashboard/${getCookie("token")}`);
    }
    if (getCookie("Unauthorized") === "true") {
      window.history.back();
    }
  }, [navigate]);
  const Authenticate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}admin/auth`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminData),
        }
      );

      if (response.ok) {
        const { token } = await response.json();
        // Redirect the user to the admin panel using the generated dynamic link
        setCookie("token", token, 1);
        navigate(`/admin/dashboard/${token}`);
      } else {
        // Handle login error
        // Only give 3 tries
        setTries(tries-1);
        if (tries === 0) {
          setCookie("Unauthorized", "true", 1);
        }
        // console.log(tries);
        alert.current.classList.add("show");
      }
    } catch (error) {
      // console.error("Error:", error);

      setTries(tries-1);

      if (tries === 0) {
        alert.current.classList.add("show");
        setCookie("Unauthorized", "true", 1);
      }
    }
  };
  return (
    <div className="container-admin">
      <Helmet>
        <title>Idris Vohra - Admin</title>
        <meta name="description" content="Admin Page for iv-portfolio" />
      </Helmet>
      <div
        className="alert alert-danger alert-dismissible fade"
        role="alert"
        ref={alert}
      >
        <strong>You don't seem to be authorised! tries left {tries} </strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <form onSubmit={Authenticate}>
        <table>
          <tbody>
            <tr>
              <th colSpan="2">
                <h4>Admin Login</h4>
              </th>
            </tr>
            <tr>
              <td>
                <label htmlFor="u">Username :</label>
              </td>
              <td>
                <input
                  type="text"
                  id="u"
                  onChange={(e) =>
                    setAdminData({ ...adminData, username: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Password :</label>
              </td>
              <td>
                <input
                  type="password"
                  id="pass"
                  onChange={(e) =>
                    setAdminData({ ...adminData, password: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Login" className="btn" />
              </td>
              <td>
                <input type="reset" value="Reset" className="btn" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
