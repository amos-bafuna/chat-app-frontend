import React, { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../context";
import axios from "axios";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { setIsConnected } = useContext(userContext);

  const submit = () => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/main/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((message) => {
        localStorage.setItem("token", message.data.token);
        localStorage.setItem("userId", message.data.userId);
        setIsConnected(true);
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
      });
  };

  return (
    <div className="right_side">
      <div className="right_side_title">Se connecter</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        action="/"
        className="sign_in_form"
      >
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="email"
            id="user_email"
            placeholder="Votre adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form_control">
          <input
            className="user_input"
            type="password"
            name="password"
            id="user_password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="errorMessage">{errorMessage ? errorMessage : ""}</p>
        <div className="forgot_password">
          <a href="/">Mot de passe oublié?</a>
        </div>

        <button className="connexion_btn">Se connecter</button>
      </form>
    </div>
  );
}

export default SignIn;
