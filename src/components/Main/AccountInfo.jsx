import React from "react";
import "./AccountInfo.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

function accountInfo({ setShowAccount }) {
  return (
    <div className="account_fill_container">
      <div className="account_container">
        <div className="account_card">
          <div className="card_header">
            <IoIosCloseCircleOutline onClick={() => setShowAccount(false)} />
          </div>
          <div className="card_body"></div>
        </div>
      </div>
    </div>
  );
}

export default accountInfo;
