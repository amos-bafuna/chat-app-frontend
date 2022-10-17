import React from "react";
import "./SignIn.css";

function SignUp() {
  return (
    <div className="right_side">
      <div className="right_side_title">S'inscrire</div>
      <form action="" className="sign_in_form">
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="name"
            id="name"
            placeholder="Votre prenom"
          />
        </div>
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="firstName"
            id="fistName"
            placeholder="Votre nom"
          />
        </div>
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="lastName"
            id="user_name"
            placeholder="Votre post-nom"
          />
        </div>
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

        <div className="form_control">
          <input
            className="user_input"
            type="password"
            name="confirmPassword"
            id="user_confirm_password"
            placeholder="Confirmer le mot de passe"
          />
        </div>

        <div className="connexion_btn">S'inscrire</div>
      </form>
    </div>
  );
}

export default SignUp;
