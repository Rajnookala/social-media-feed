import React from "react";
import Fc6F33Fc47Fc8D4A9D3Acbba557882 from "./1-2fc-6f-3-3fc-4-7fc-8d-4a-9d-3acbba-557882.png";
import A35F9B5Cd9A061345A963Eac4C291 from "./92-8a-3-5f-9b-5cd-9a-06134-5a-96-3eac-4c-291.png";
import F1Ce162E34D0Abc23432Ee8Cc0 from "./19082-7f-1ce-16-2e-3-4d-0abc-2343-2ee-8cc-0.png";
import hiHeart from "./hi-heart.svg";
import navigation2 from "./navigation-2.svg";
import "./style.css";

export const Box = () => {
  return (
    <article className="box">
      <section className="group">
        <div className="overlap-group">
          <img
            className="element"
            alt="Statue of Liberty"
            src={A35F9B5Cd9A061345A963Eac4C291}
          />

          <img
            className="element-fc-f-fc-fc"
            alt="New York City Street"
            src={Fc6F33Fc47Fc8D4A9D3Acbba557882}
          />

          <img
            className="element-f-ce-e"
            alt="Profile Picture"
            src={F1Ce162E34D0Abc23432Ee8Cc0}
          />

          <h2 className="text-wrapper">Aarav</h2>

          <time className="div">2 hours ago</time>

          <p className="just-arrived-in-new">
            <span>
              Just arrived in New York City! Excited to explore the sights,
              sounds, and energy of this amazing place. 🗽
            </span>
            <span className="text-wrapper-2"> #NYC #Travel</span>
          </p>

          <div className="group-2">
            <span className="text-wrapper-3">67</span>
            <img className="react-icons-hi" alt="Heart Icon" src={hiHeart} />
          </div>

          <div className="frame">
            <img
              className="icon-fill-navigation"
              alt="Share Icon"
              src={navigation2}
            />
            <span className="text-wrapper-4">Share</span>
          </div>
        </div>
      </section>
    </article>
  );
};
