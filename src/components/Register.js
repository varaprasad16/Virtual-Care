import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phoneno: "",
    age: "",
    gender: "",
    address: "",
    email: "",
    password: "",
    registered: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, phoneno, age, gender, address, email, password } = state;

    if (name && phoneno && email && address && age && password && gender) {
      const res = await fetch(
        "https://virtual-care-fce99-default-rtdb.firebaseio.com/RegisterData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phoneno,
            age,
            gender,
            address,
            email,
            password,
          }),
        }
      );

      if (res) {
        setState({ name: "" });
        setState({ phoneno: "" });
        setState({ email: "" });
        setState({ age: "" });
        setState({ gender: "" });
        setState({ address: "" });
        setState({ registered: true });
        alert("Successfully registered!");
        navigate("/logIn");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: state.name,
        });
        setState({ email: "" });
        setState({ password: "" });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <div class="form-reg">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input
            id="name"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.name || ""}
          />
          <div class="cut"></div>
          <label for="name" class="placeholder">
            Name
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="phoneno"
            class="input"
            type="tel"
            placeholder=" "
            onChange={onChange}
            value={state.phoneno || ""}
          />
          <div class="cut"></div>
          <label for="phoneno" class="placeholder">
            Phone No
          </label>
        </div>
        <div class="input-container ic1">
          <input
            id="age"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.age || ""}
          />

          <div class="cut"></div>
          <label for="age" class="placeholder">
            Age
          </label>
        </div>
        <div class="input-container ic1">
          <select
            class="input"
            id="gender"
            value={state.gender || ""}
            onChange={onChange}
          >
            <option>Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <div class="cut"></div>
          <label for="gender" class="placeholder">
            Gender
          </label>
        </div>
        <div class="input-container ic1">
          <input
            id="address"
            class="input"
            type="textarea"
            placeholder=" "
            onChange={onChange}
            value={state.address || ""}
          />
          <div class="cut"></div>
          <label for="address" class="placeholder">
            Address
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.email || ""}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>
        <div class="input-container ic1">
          <input
            id="password"
            class="input"
            type="password"
            placeholder=" "
            onChange={onChange}
            value={state.password || ""}
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">
            Password
          </label>
        </div>
        <button type="text" class="submit" onClick={submitData}>
          submit
        </button>
        <div>
          <Link to="/logIn" className="link">
            Already have an Account? LogIn here
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
