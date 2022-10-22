import React, { useContext, useEffect, useState } from "react";
import RecentSingle from "./RecentSingle";
import Message from "./Message";
import { MdLogout } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { userContext } from "../../context";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import ProfilePic from "../../images/profile1.jpg";
import "./Main.css";

function Main() {
  const { token, userId, discuss } = useContext(userContext);
  const [recentMessage, setRecentMessage] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/message/recent",
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
    <div className="main">
      <div className="profile_culumn">
        <div className="profile_info">
          <div className="profile_picture">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="inbox_icon">
            <AiFillMessage />
          </div>
        </div>
        <div className="deconnect_icon">
          <MdLogout />
        </div>
      </div>
      <div className="recent_culumn">
        <div className="search_bar">
          <form className="search_box">
            <span className="search_icon">
              <BiSearch />
            </span>
            <input
              className="search_input"
              type="text"
              name="search"
              placeholder="Recherche"
            />
          </form>
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
        </div>
      </div>
      <Message discussInfo={discuss} />
    </div>
  );
}

export default Main;
