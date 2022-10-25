import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import HomeImg from "../../images/homeImg.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Home.css";

function Home() {
  return (
    <Router>
      <div className="home">
        <div className="left_side">
          <h1 className="home_title">Lisolo</h1>
          <div className="home_img">
            <img src={HomeImg} alt="Home" />
          </div>
          <div className="home_btns">
            <Link to="/" className="home_btns_sign_in">
              Se connecter
            </Link>
            <Link to="/signUp" className="home_btns_sign_up">
              S&apos;inscrire
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
