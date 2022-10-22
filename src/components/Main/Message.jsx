import React, { useContext } from "react";
import ProfileDiscuss from "../../images/profile2.jpeg";
import { AiOutlineSend } from "react-icons/ai";
import { userContext } from "../../context";
import axios from "axios";
import { useState } from "react";
import InboxImg from "../../images/inbox.svg";

function Message({ discussInfo }) {
  const { userId, token } = useContext(userContext);
  const [messageText, setMessageText] = useState("");

  const discussId = discussInfo && discussInfo._id;
  const sendMessage = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/message/send",
      data: {
        id: discussId,
        message: {
          from: userId,
          text: messageText,
          imageUril: "",
        },
      },
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      console.log(response);
    });
    setMessageText("");
  };
  return (
    <div className="discuss_culumn">
      {!discussInfo ? (
        <div className="inbox_empty">
          <img src={InboxImg} alt="" />
          <div>Démarrez une discussion</div>
        </div>
      ) : (
        <>
          <div className="discuss_profile">
            <div className="discuss_photo">
              <img src={ProfileDiscuss} alt="" width={60} />
            </div>
            <div className="discuss_info">
              <div className="discuss_name">
                {discussInfo &&
                  discussInfo.participants.map((user) =>
                    user._id !== userId
                      ? user.userName + " " + user.firstName
                      : ""
                  )}
              </div>
              <div className="discuss_status">Online</div>
            </div>
            <div></div>
          </div>
          <div className="discuss_messages">
            {discussInfo &&
              discussInfo.messages.map((message) =>
                message.from === userId ? (
                  <div className="message-box in" key={message._id}>
                    <div className="message discuss_message_out">
                      {message.text}
                    </div>
                  </div>
                ) : (
                  <div className="message-box out" key={message._id}>
                    <div className="message discuss_message_in">
                      {message.text}
                    </div>
                  </div>
                )
              )}
          </div>
          <div className="discuss_bottom">
            <form
              action=""
              className="discuss_form"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <div className="input_box">
                <input
                  type="text"
                  className="discuss_input"
                  onChange={(e) => setMessageText(e.target.value)}
                  value={messageText}
                />
              </div>
              <button className="discuss_send_btn">
                <AiOutlineSend />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Message;
