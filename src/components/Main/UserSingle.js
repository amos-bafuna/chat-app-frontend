import React from "react";
import Photo from "../../images/profile.jpg";
import "./RecentSingle.css";

function UserSingle({ name, lastName, id }) {
  return (
    <div key={id} className="recent_single">
      <div className="recent_profile">
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div className="recent_detail">
        <div className="recent_name">{name + " " + lastName}</div>
      </div>
    </div>
  );
}

export default UserSingle;
