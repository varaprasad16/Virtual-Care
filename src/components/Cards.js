import React from "react";
import "./Cards.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CardItem from "./CardItem";

function Cards({ serviceHandle }) {
  const [showBody, setShowBody] = useState(true);
  const toggleBody = () => {
    setShowBody((showBody) => false);
  };
  return (
    <div>
      {showBody == true && (
        <div className="cards">
          <h1>Check Out Our Services!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <div>
                  <CardItem
                    src="images\Telemedicine.jpg"
                    path="instantconsultation"
                    text="Online doctor consultation in 15 mins with 1000+ Top Specialist Doctors. "
                    label="Instant Consultation"
                    onClick={toggleBody}
                  />
                </div>
                <div>
                  <CardItem
                    src="images\bookapp.jpg"
                    path="bookappointment"
                    text="Book doctor appointment online instantly with top specialists. "
                    label="Book Appointment"
                    onClick={toggleBody}
                  />
                </div>
                <div>
                  <CardItem
                    src="images\online-doctor telemedicine.jpg"
                    path="consultation"
                    text="Our specialists are offering Online Consultations (Audio/Video) at the time that suits you best."
                    label="Online Consultation"
                    onClick={toggleBody}
                  />
                </div>
                <div>
                  <CardItem
                    src="./images/emergency.jpg"
                    path="emergency"
                    text="Emergency Response Officer’ Screen helps facilitate and scope emergency, assign strategically located ambulance (Ambulance/ Police/ Fire)."
                    label="Emergency"
                    onClick={toggleBody}
                  />
                </div>
              </ul>
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
