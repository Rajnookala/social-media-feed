import React from "react";
import Fc6F33Fc47Fc8D4A9D3Acbba557882 from "./1-2fc-6f-3-3fc-4-7fc-8d-4a-9d-3acbba-557882.png";
import F1Ce162E34D0Abc23432Ee8Cc0 from "./19082-7f-1ce-16-2e-3-4d-0abc-2343-2ee-8cc-0.png";
import e2Cfd03Cc1C628062B688B32E6688A5 from "./2e-2cfd-0-3cc-1c-62806-2b-68-8b-3-2e-668-8a-5.png";
import A35F9B5Cd9A061345A963Eac4C291 from "./92-8a-3-5f-9b-5cd-9a-06134-5a-96-3eac-4c-291.png";
import hiHeart from "./hi-heart.svg";
import hiPlay from "./hi-play.svg";
import image from "./image.svg";
import navigation2 from "./navigation-2.svg";
import "./style.css";

export const UserFeeds = () => {
  return (
    <div className="user-feeds">
      <div className="group">
        <div className="overlap-group">
          <img className="element" alt="Element" src={A35F9B5Cd9A061345A963Eac4C291} />
          <img className="element-fc-f-fc-fc" alt="Element" src={Fc6F33Fc47Fc8D4A9D3Acbba557882} />
          <img className="img" alt="Element" src={F1Ce162E34D0Abc23432Ee8Cc0} />
          <div className="text-wrapper">Aarav</div>
          <div className="div">2 hours ago</div>
          <p className="just-arrived-in-new">
            <span className="span">
              Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽
            </span>
            <span className="text-wrapper-2"> #NYC #Trave</span>
            <span className="span">l</span>
          </p>
          <div className="group-2">
            <div className="text-wrapper-3">67</div>
            <img className="react-icons-hi" alt="React icons hi" src={hiHeart} />
          </div>
          <div className="frame">
            <img className="icon-fill-navigation" alt="Icon fill navigation" src={navigation2} />
            <div className="text-wrapper-4">Share</div>
          </div>
        </div>
      </div>
      <div className="group">
        <div className="overlap">
          <div className="react-icons-hi-wrapper">
            <img className="react-icons-hi-2" alt="React icons hi" src={hiPlay} />
          </div>
          <img className="img" alt="Element" src={e2Cfd03Cc1C628062B688B32E6688A5} />
          <div className="text-wrapper">Sneha</div>
          <div className="div">1 day ago</div>
          <p className="taking-a-moment-to">
            <span className="span">
              Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary.
              �
            </span>
            <span className="text-wrapper-2">� #SelfCare #MeTime #Wellne</span>
            <span className="span">ss</span>
          </p>
          <div className="group-2">
            <div className="text-wrapper-5">67</div>
            <img className="react-icons-hi-3" alt="React icons hi" src={hiHeart} />
          </div>
          <div className="frame">
            <img className="icon-fill-navigation-2" alt="Icon fill navigation" src={image} />
            <div className="text-wrapper-4">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};
