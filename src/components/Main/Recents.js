import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../context";
import RecentSingle from "./RecentSingle";

function Recents() {
  const { token, userId } = useContext(userContext);
  const [recentMessage, setRecentMessage] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/message/recent`,
      headers: {
        Authorization: token,
      },
      params: {
        id: userId,
      },
    }).then((response) => {
      setRecentMessage(response.data);
    });
  }, [token, userId]);

  return (
    <div className="recent_discuss">
      <div className="recent_title">Recent</div>
      {recentMessage &&
        recentMessage?.map((element) => (
          <RecentSingle
            key={element._id}
            participants={element.participants}
            message={element.messages[element.messages.length - 1]}
          />
        ))}
    </div>
  );
}

export default Recents;
