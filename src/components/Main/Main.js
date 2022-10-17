import React from "react";
import RecentSingle from "./RecentSingle";
import { MdLogout } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import ProfilePic from "../../images/profile1.jpg";
import ProfileDiscuss from "../../images/profile2.jpeg";
import "./Main.css";

function Main() {
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
            <RecentSingle />
            <RecentSingle />
            <RecentSingle />
            <RecentSingle />
          </div>
        </div>
      </div>
      <div className="discuss_culumn">
        <div className="discuss_profile">
          <div className="discuss_photo">
            <img src={ProfileDiscuss} alt="" width={60} />
          </div>
          <div className="discuss_info">
            <div className="discuss_name">Amos Bafuna</div>
            <div className="discuss_status">Online</div>
          </div>
          <div></div>
        </div>
        <div className="discuss_messages">
          <div className="message discuss_message_in">Hello</div>
          <div className="message discuss_message_out">Hi, How are you?</div>
          <div className="message discuss_message_in">Good, How are you?</div>
          <div className="message discuss_message_out">I'm fine. </div>
        </div>
        <div className="discuss_bottom">
          <form action="" className="discuss_form">
            <div className="input_box">
              <input type="text" className="discuss_input" />
            </div>
            <button className="discuss_send_btn">
              <AiOutlineSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
