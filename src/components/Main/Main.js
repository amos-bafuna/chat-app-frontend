import React, { useContext, useState, useEffect } from "react";
import Message from "./Message";
import Users from "./Users";
import { userContext } from "../../context";
import { MdLogout } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import ProfilePic from "../../images/profile1.jpg";
import "./Main.css";
import AccountInfo from "./AccountInfo";
import Recents from "./Recents";

function Main() {
  const { discuss } = useContext(userContext);
  const [showContacts, setShowContacts] = useState(true);
  const [showAccount, setShowAccount] = useState(false);

  useEffect(() => {}, [showAccount]);

  return (
    <div className="main">
      <div className="profile_culumn">
        <div className="profile_info">
          <div className="profile_picture">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="profile_more_info">
            <BsInfoCircle onClick={() => setShowAccount(!showAccount)} />
          </div>
          <div>
            <div className="inbox_icon" onClick={() => setShowContacts(true)}>
              <AiFillMessage />
            </div>
            <div className="contact_icon" onClick={() => setShowAccount(false)}>
              <TiContacts />
            </div>
          </div>
        </div>
        <div
          className="deconnect_icon"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            window.location.reload(false);
          }}
        >
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
          {showContacts ? <Recents /> : <Users />}
        </div>
      </div>
      <Message discussInfo={discuss} />
      {showAccount ? <AccountInfo setShowAccount={setShowAccount} /> : ""}
    </div>
  );
}

export default Main;
