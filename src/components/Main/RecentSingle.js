import React from "react";
import Photo from "../../images/profile.jpg";
import "./RecentSingle.css";

function RecentSingle() {
  return (
    <div className="recent_single">
      <div className="recent_profile">
        <img src={Photo} alt="" width="60" height="60" />
      </div>
      <div className="recent_detail">
        <div className="recent_name">Amos</div>
        <div className="recent_message">Je suis le text de test</div>
      </div>
    </div>
  );
}

export default RecentSingle;
