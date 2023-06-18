import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./PageBody.css";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
function PageBody() {
  const [playerOn, setPlayerOn] = useState(false);
  const openYt = () => {
    setPlayerOn(!playerOn);
  };
  return (
    <div>
      <div className="hero-container">
        <img src="/images/doctorimg-1.jpeg" alt="" />
        <h1>A Passion for Best health care.</h1>
        <p>What are you waiting for?</p>
        {playerOn && (
          <div>
            <VideoPlayer src="videos\What is virtual care and how can it help you_.mp4" />
          </div>
        )}

        <div className="hero-btns">
          <Link to="/login">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
            </Button>
          </Link>
          {/* <Link to="videoplayer"> */}
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={openYt}
          >
            HOW IT WORKS <i className="far fa-play-circle" />
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default PageBody;
