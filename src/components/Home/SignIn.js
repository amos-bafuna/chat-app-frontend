import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="right_side">
      <div className="right_side_title">Se connecter</div>
      <form action="" className="sign_in_form">
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="email"
            id="user_email"
            placeholder="Votre adresse mail"
          />
        </div>

        <div className="form_control">
          <input
            className="user_input"
            type="password"
            name="password"
            id="user_password"
            placeholder="Votre mot de passe"
          />
        </div>
        <div className="forgot_password">
          <a href="/">Mot de passe oublié?</a>
        </div>

        <div className="connexion_btn">Se connecter</div>
      </form>
    </div>
  );
}

export default SignIn;
