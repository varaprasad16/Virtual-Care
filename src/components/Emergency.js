import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Emergency() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    phoneno: "",
    place: "",
    situation: "",
  });
  // const [errorMsg, setErrorMsg] = useState("");
  //const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { phoneno, place, situation } = state;

    if (phoneno && place && situation) {
      const res = await fetch(
        "https://virtualcare-89a74-default-rtdb.firebaseio.com//Emergency.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneno,
            place,
            situation,
          }),
        }
      );

      if (res) {
        setState({ phoneno: "" });
        setState({ place: "" });
        setState({ situation: "" });
        alert("Request Submitted!");
        navigate("/services");
      } else {
        alert("plz fill the data");
      }
    } else {
      console.log(state.phoneno);
      console.log(state.place);
      console.log(state.situation);
      alert("plz fill the data");
    }
  };

  return (
    <div>
      <div className="form-emergency">
        <div className="title">Emergency</div>
        <div class="subtitle">Get HELP from the nearest One</div>
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
            id="place"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.place}
          />
          <div class="cut cut-short"></div>
          <label for="place" class="placeholder">
            Place
          </label>
        </div>
        <div class="input-container ic1">
          <input
            id="situation"
            class="input"
            type="text"
            placeholder=" "
            onChange={onChange}
            value={state.situation}
          />

          <div class="cut"></div>
          <label for="situation" class="placeholder">
            Situation
          </label>
        </div>
        <button type="text" class="submit" onClick={submitData}>
          I Need Help
        </button>
      </div>
    </div>
  );
}
export default Emergency;
