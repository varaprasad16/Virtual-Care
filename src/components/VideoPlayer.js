import React from "react";

class VideoPlayer extends React.Component {
  render() {
    return (
      <div>
        <style>
          {`
            video {
              width: 50%;
              height: auto;
              margin-top: 20px;
              margin-bottom: 10px;
              border: 4px solid #eee;
              border-radius: 20px;
              display: block;
              margin: auto;
              
            }
          `}
        </style>
        <video controls autoPlay>
          <source src={this.props.src} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
