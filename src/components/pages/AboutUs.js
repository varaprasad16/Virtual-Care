import React from "react";
//import AddAppointments from "../AddAppointment";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <h1 className="aboutus">About Us</h1>
      <p className="para">
        Virtual care is the concept where users or patients can consult doctors 
        virtually without any direct contact, and which also  saves the effort
        as well as time of the users. It also decreases the risk transmitting
        diseases like covid.
      </p>
      <p className="para">
        It is abroad term that encompasses all the ways healthcare providers
        remotely interact with their patients . In addition to treating patients
        vitelli medicine, providers may use live video, audio, and instant
        messaging to communicate with their patients remotely.
      </p>
      <p className="para">
        Virtual healthcare is a component of Telehealth, which refers to
        the many ways healthcare providers interact with their patients remotely
        .Virtual healthcare is more like virtual visits that take place between
        healthcare experts and their patients via communications technology.
      </p>
      {/* <AddAppointments /> */}
    </div>
  );
}
