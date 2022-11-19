import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../context";
import RecentSingle from "./RecentSingle";
import ClipLoader from "react-spinners/ClipLoader";

function Recents() {
  const { token, userId } = useContext(userContext);
  const [recentMessage, setRecentMessage] = useState();

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
      {recentMessage ? (
        recentMessage?.map((element) => (
          <RecentSingle
            key={element._id}
            idDiscuss={element._id}
            participants={element.participants}
            message={element.messages[element.messages.length - 1]}
          />
        ))
      ) : (
        <ClipLoader
          color="#1056e2"
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}

export default Recents;
