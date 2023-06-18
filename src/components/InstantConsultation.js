import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Link,Navigate
function InstantConsultation1() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    phoneno: "",
    email: "",
    age: "",
    gender: "",
    problem: "",
  });
  // const [errorMsg, setErrorMsg] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, phoneno, email, age, gender, problem } = state;

    if (name && gender && phoneno && email && problem && age) {
      const res = await fetch(
        "https://virtualcare-89a74-default-rtdb.firebaseio.com/InstantConsultations.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phoneno,
            email,
            age,
            gender,
            problem,
          }),
        }
      );

      if (res) {
        setState({ name: "" });
        setState({ phoneno: "" });
        setState({ email: "" });
        setState({ age: "" });
        setState({ gender: "" });
        setState({ problem: "" });
        alert("Appointment Request Submitted!");
        navigate("/services");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <div>
      <div class="form-instant">
        <div class="title">Instant Consultation</div>
        <div class="subtitle">Get an Instant Appointment!</div>
        <div class="input-container ic1">
          <input
            id="name"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.name}
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
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.phoneno}
          />
          <div class="cut"></div>
          <label for="phoneno" class="placeholder">
            Phone No
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.email}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>
        <div class="input-container ic1">
          <input
            id="age"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.age}
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
            value={state.gender}
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
            id="problem"
            class="input"
            type="textarea"
            placeholder=" "
            onChange={onChange}
            value={state.problem}
          />
          <div class="cut"></div>
          <label for="problem" class="placeholder">
            Problem
          </label>
        </div>
        <button type="text" class="submit" onClick={submitData}>
          Get Appointment
        </button>
      </div>
    </div>
  );
}
export default InstantConsultation1;
