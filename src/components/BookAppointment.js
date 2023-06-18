import React from "react";
import "./Register.css";
//import { useNavigate } from "react-router-dom";

class BookAppointment extends React.Component {
  //navigate = useNavigate();
  constructor(props) {
    super(props);
    this.state = {
      patientName: "",
      patientAge: "",
      gender: "",
      hospital: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
      formErrors: false,
    };
  }
  save = (e) => {
    e.preventDefault();
    const {
      patientName,
      patientAge,
      gender,
      hospital,
      aptDate,
      aptTime,
      aptNotes,
    } = this.state;
    if (
      patientName !== "" &&
      patientAge !== "" &&
      gender !== "" &&
      aptDate !== "" &&
      hospital &&
      aptTime !== "" &&
      aptNotes !== ""
    ) {
      let apt = {
        id: Date.now(),
        patientName: this.state.patientName,
        patientAge: this.state.patientAge,
        gender: this.state.gender,
        hospital: this.state.hospital,
        aptDate: this.state.aptDate + " " + this.state.aptTime,
        aptNotes: this.state.aptNotes,
      };
      let clear = {
        patientName: "",
        patientAge: "",
        gender: "",
        hospital: "",
        aptDate: "",
        aptTime: "",
        aptNotes: "",
      };
      this.setState({
        formErrors: false,
        showBody: false,
        ...clear,
      });
      //this.props.saveApt(apt);
      alert("Appointment Request Submitted!");
      //navigate("/services");
    } else {
      this.setState({
        formErrors: true,
      });
      alert("plz fill the data");
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    let errors = {
      display: this.state.formErrors ? "block" : "none",
    };
    let hospitals = [
      { value: "Adithya Hospital", id: "1" },
      { value: "Apollo Hospital", id: "2" },
      { value: "Care Hospital", id: "3" },
      { value: "Global Hospitals", id: "4" },
      { value: "Hope Childrens Hospital", id: "5" },
      { value: "Ozone Hospitals", id: "6" },
      { value: "Prathima Hospitals", id: "7" },
      { value: "Shreyas Hospital", id: "8" },
      { value: "Woodlands Hospital ", id: "9" },
      { value: "Yashoda Hospital", id: "10" },
    ];
    return (
      <div>
        <div class="form-apt">
          <div class="title">Schedule Appointment</div>
          <div class="subtitle">Plan your Visit! </div>
          <div class="input-container ic1">
            <input
              id="patientName"
              class="input"
              type="text"
              placeholder=" "
              onChange={this.handleChange}
              value={this.state.patientName}
            />
            <div class="cut"></div>
            <label for="patientName" class="placeholder">
              Ptnt.Name
            </label>
          </div>

          <div class="input-container ic1">
            <input
              id="patientAge"
              class="input"
              type="text"
              placeholder=" "
              onChange={this.handleChange}
              value={this.state.patientAge}
            />
            <div class="cut"></div>
            <label for="patientName" class="placeholder">
              Age
            </label>
          </div>

          <div class="input-container ic1">
            <select
              id="gender"
              class="input"
              value={this.state.gender}
              onChange={this.handleChange}
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
            <select
              id="hospital"
              class="input"
              value={this.state.hospital}
              onChange={this.handleChange}
            >
              {hospitals.map((item) => {
                return (
                  <option key={item.id} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
            <div class="cut"></div>
            <label for="hospital" class="placeholder">
              hospital
            </label>
          </div>
          <div class="input-container ic1">
            <input
              id="aptDate"
              type="date"
              class="input"
              placeholder=""
              value={this.state.aptDate}
              onChange={this.handleChange}
            />
            <div class="cut"></div>
            <label for="aptDate" class="placeholder">
              Date
            </label>
          </div>

          <div class="input-container ic1">
            <input
              id="aptTime"
              type="time"
              class="input"
              placeholder=""
              value={this.state.aptTime}
              onChange={this.handleChange}
            />
            <div class="cut"></div>
            <label for="aptTime" class="placeholder">
              Time
            </label>
          </div>

          <div class="input-container ic1">
            <input
              id="aptNotes"
              class="input"
              type="textarea"
              placeholder=" "
              onChange={this.handleChange}
              value={this.state.aptNotes}
            />
            <div class="cut"></div>
            <label for="aptNotes" class="placeholder">
              Problem
            </label>
            <div>
              {/* <alert>
                  <font color="#08d">Please fill all the details</font>
                </alert> */}
            </div>
            <div>
              <button type="text" class="submit" onClick={this.save}>
                Add Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
