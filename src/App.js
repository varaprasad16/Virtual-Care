import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import InstantConsultation from "./components/InstantConsultation";
import Consultation from "./components/Consultation";
import Emergency from "./components/Emergency";
import LogIn from "./components/LogIn";
import BookAppointment from "./components/BookAppointment";
import VideoPlayer from "./components/VideoPlayer";
//import Cards from "./components/Cards";
//import AddAppointments from "./components/AddAppointment";
//import ListAppointments from "./components/ListAppointments";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route
              path="videoplayer"
              element={
                <VideoPlayer src="videos\What is virtual care and how can it help you_.mp4" />
              }
            />
          </Route>
          <Route path="services" element={<Services />}>
            {/* <Route index element={<Cards />} /> */}
            <Route
              path="instantconsultation"
              element={<InstantConsultation />}
            />
            <Route path="bookappointment" element={<BookAppointment />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="emergency" element={<Emergency />} />
          </Route>
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="logIn" element={<LogIn />} />
        </Routes>
      </Router>
      {/* <AddAppointments /> */}
      {/* <ListAppointments /> */}
    </>
  );
}

export default App;
