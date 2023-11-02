import React from "react";
import "./LoginPage.css";

import PasswordIcon from "../Assets/padlock.png";
import UserIcon from "../Assets/user.png";
import EmailIcon from "../Assets/mail.png";
import { useState } from "react";
import Game from "./Game";
import LoginValidation from "./LoginValidation";

function LoginPage({ setLoginDetails }) {
  const [userIdInput, setUserIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <div className="loginContainer">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="inputForm">
          {/* <div className="inputField">
              <img src={EmailIcon} alt="" className="fieldIcon" />
              <input type="email" placeholder="Email Id" />
            </div> */}
          <div className="inputField">
            <img src={UserIcon} alt="" className="fieldIcon" />
            <input
              type="text"
              placeholder="Username / Email Id"
              onChange={(event) => setUserIdInput(event.target.value)}
            />
          </div>
          <div className="inputField">
            <img src={PasswordIcon} alt="" className="fieldIcon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPasswordInput(event.target.value)}
            />
          </div>
        </div>
        <div
          className="submitButton"
          onClick={() => {
            if (LoginValidation(userIdInput, passwordInput)) {
              setLoginDetails({ name: userIdInput, password: passwordInput });
              setPasswordInput("");
              setUserIdInput("");
            }
          }}
        >
          <div className="buttonText">
            <p>Log In</p>
          </div>
        </div>
      </div>
    </>
  );
}

function RegistrationPage({ setLoginDetails }) {
  const [emailInput, setEmailInput] = useState("");
  const [userNameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <div className="loginContainer">
        <div className="heading">
          <h1>Register</h1>
        </div>
        <div className="inputForm">
          <div className="inputField">
            <img src={EmailIcon} alt="" className="fieldIcon" />
            <input
              type="email"
              placeholder="Email Id"
              onChange={(event) => setEmailInput(event.target.value)}
            />
          </div>
          <div className="inputField">
            <img src={UserIcon} alt="" className="fieldIcon" />
            <input
              type="text"
              placeholder="Username / Email Id"
              onChange={(event) => setUsernameInput(event.target.value)}
            />
          </div>
          <div className="inputField">
            <img src={PasswordIcon} alt="" className="fieldIcon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPasswordInput(event.target.value)}
            />
          </div>
        </div>
        <div
          className="submitButton"
          onClick={() => {
            setLoginDetails({
              email: emailInput,
              name: userNameInput,
              password: passwordInput,
            });
            setPasswordInput("");
            setUsernameInput("");
            setEmailInput("");
          }}
        >
          <div className="buttonText">
            <p>Submit</p>
          </div>
        </div>
      </div>
    </>
  );
}

function UserLoginOrSignIn({ setSignOrLog }) {
  return (
    <>
      <div className="formContainer">
        <h1>Register/Log In</h1>
        <div className="selectForm">
          <div
            className="formSelectButton"
            onClick={() => setSignOrLog("RegistrationPage")}
          >
            <p>Sign In</p>
          </div>
          <div
            className="formSelectButton"
            onClick={() => setSignOrLog("LoginPage")}
          >
            <p>Log In</p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [loginDetails, setLoginDetails] = useState({});
  const [signOrLog, setSignOrLog] = useState("Main Page");

  if (Object.keys(loginDetails).length === 0) {
    if (signOrLog === "Main Page") {
      return <UserLoginOrSignIn setSignOrLog={setSignOrLog} />;
    } else if (signOrLog === "RegistrationPage") {
      return <RegistrationPage setLoginDetails={setLoginDetails} />;
    } else {
      return <LoginPage setLoginDetails={setLoginDetails} />;
    }
  } else {
    return <Game userName={loginDetails.name} />;
  }
}

export default App;
