import React, { useRef } from "react";

export default function Admin() {
  const username = useRef();
  const pass = useRef(); 
  const Authenticate = () =>{
    var uname = username.current.value;
    var passwd = pass.current.value;
    if (uname === "IdrisAdmin" && passwd === "Idrisdgr8"){
      console.log("Access Granted");
    }
    else{
      console.log("Access Denied");
    }
  }
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
              <td>
                <label htmlFor="u">Username :</label>
              </td>
              <td>
                <input type="text" id="u" ref={username}/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Password :</label>
              </td>
              <td>
                <input type="password" id="pass" ref={pass}/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="Login" className="btn" onClick={() => Authenticate()}/>
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
