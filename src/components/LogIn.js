import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LogIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const onChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  const handleSubmission = () => {
    if (!values.email || !values.password) {
      console.log(values.email);
      console.log(values.password);
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        alert(" You are Successfully loged in✨✨");
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div>
      <div class="form-login">
        <div class="title">Welcome</div>
        <div class="subtitle">Login into your account</div>
        <div class="input-container ic1">
          <input
            id="email"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
          />
          <div class="cut"></div>
          <label for="email" class="placeholder">
            email
          </label>
        </div>
        <div class="input-container ic1">
          <input
            id="password"
            class="input"
            type="password"
            placeholder=" "
            onChange={onChange}
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">
            Password
          </label>
        </div>
        <div>
          <font color="white" size="4" face="verdana">
            {errorMsg}
          </font>
        </div>
        <button
          type="text"
          class="submit"
          disabled={submitButtonDisabled}
          onClick={handleSubmission}
        >
          Login
        </button>
        <div>
          <Link to="/signup" className="link">
            Don't have Account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
