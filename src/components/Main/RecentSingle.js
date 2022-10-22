import React, { useContext } from "react";
import { userContext } from "../../context";
import axios from "axios";
import Photo from "../../images/profile.jpg";
import "./RecentSingle.css";

function RecentSingle({ message, participants }) {
  const { token, userId, setDiscuss } = useContext(userContext);

  const userIdDiscuss = participants
    .map((user) => (user._id !== userId ? user._id : null))
    .join("");

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
    <div onClick={() => getMessage(userIdDiscuss)} className="recent_single">
      <div className="recent_profile">
        <img src={Photo} alt="" width="60" height="60" />
      </div>
      <div className="recent_detail">
        <div className="recent_name">
          {participants.map((user) =>
            user._id !== userId ? user.userName + " " + user.lastName : ""
          )}
        </div>
        <div className="recent_message">{message?.text}</div>
      </div>
    </div>
  );
}

export default RecentSingle;
