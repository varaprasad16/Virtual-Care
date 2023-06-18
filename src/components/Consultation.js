import AddAppointments from "./AddAppointment";
import React, { Component } from "react";
import _ from "lodash";
import { redirect } from "react-router-dom";
import "./Register.css";
import ListAppointments from "./ListAppointments";
export class Consultation extends Component {
  state = {
    appointments: [],
  };
  saveAppointment = (newAppointment) => {
    let apts = this.state.appointments;
    apts.push(newAppointment);
    this.setState({
      appointments: apts,
    });
  };
  deleteAppointment = (aptId) => {
    let apts = this.state.appointments;
    let aptToDelete = _.find(
      apts,
      _.matchesProperty("id", parseInt(aptId, 10))
    );
    const newApts = _.without(apts, aptToDelete);
    this.setState({
      appointments: newApts,
    });
  };
  render() {
    let filteredApts = this.state.appointments;
    return (
      <div>
        <ListAppointments
          appointments={filteredApts}
          onDelete={this.deleteAppointment}
        />
        <AddAppointments saveApt={this.saveAppointment} />
      </div>
    );
  }
}

export default Consultation;
