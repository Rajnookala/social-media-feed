import React from "react";
import socialMediaFeedUiScreen from "../../assets/social-media-feed-UI-screen.svg";
import "./Box.css";

const Box = () => {
  return (
    <section className="box">
      <img
        className="social-media-feed-UI"
        alt="Social media feed UI"
        src={socialMediaFeedUiScreen}
        loading="lazy"
      />
    </section>
  );
};

export default Box;
