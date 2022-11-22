import React, { useContext } from "react";
import ProfileDiscuss from "../../images/profile2.jpeg";
import { AiOutlineSend } from "react-icons/ai";
import { userContext } from "../../context";
import axios from "axios";
import { useState } from "react";
import InboxImg from "../../images/inbox.svg";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import PuffLoader from "react-spinners/PuffLoader";
import ClipLoader from "react-spinners/BounceLoader";

function Message({ discussInfo }) {
  const {
    userId,
    token,
    discussID,
    socket,
    loading,
    sendMessageLoading,
    setSendMessageLoading,
  } = useContext(userContext);
  const [messageText, setMessageText] = useState("");
  const [messageList, setMessageList] = useState();

  useEffect(() => {
    if (Object.keys(discussInfo).length > 0) {
      setMessageList(discussInfo.messages);
    }
  }, [discussInfo]);

  const discussId = discussInfo && discussInfo._id;

  useEffect(() => {
    socket.emit("join-room", discussID);

    socket.on("received_message", (messageInfo) => {
      setMessageList((prevState) => [...prevState, messageInfo.message]);
    });
  }, [discussID]);

  const sendMessage = () => {
    setSendMessageLoading(true);
    const messageInfo = {
      discussID: discussId,
      message: { from: userId, text: messageText },
    };
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/message/send`,
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
      socket.emit("send_message", { messageInfo });
      console.log(response);
      setSendMessageLoading(false);
      setMessageText("");
    });
  };

  return (
    <div className="discuss_culumn">
      <div className="discuss_culumn_content">
        {Object.keys(discussInfo).length < 1 ? (
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
                  {Object.keys(discussInfo).length > 0 &&
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
            <ScrollToBottom
              scrollViewClassName="discuss_messages"
              className="discuss_messages"
              checkInterval={5}
              initialScrollBehavior={"auto"}
              mode={"bottom"}
            >
              {loading ? (
                <div className="loader">
                  <ClipLoader
                    color="#1056e2"
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                messageList &&
                messageList.map((message) =>
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
                )
              )}
            </ScrollToBottom>
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
                  {sendMessageLoading ? (
                    <PuffLoader size={12} color={"#fff"} />
                  ) : (
                    <AiOutlineSend />
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Message;
