import React, { useContext } from "react";
import axios from "axios";
import { userContext } from "../../context";
import Photo from "../../images/profile.jpg";
import "./RecentSingle.css";

function UserSingle({ name, firstName, contactId }) {
  const { token, userId, setDiscuss } = useContext(userContext);

  const getMessage = (id) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/message/discuss`,
      data: {
        participants: [id, userId],
      },
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      setDiscuss(response.data);
    });
  };
  return (
    <div
      key={contactId}
      className="recent_single"
      onClick={() => getMessage(contactId)}
    >
      <div className="recent_profile">
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div className="recent_detail">
        <div className="recent_name">{name + " " + firstName}</div>
      </div>
    </div>
  );
}

export default UserSingle;
