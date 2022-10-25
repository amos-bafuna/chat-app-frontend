import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //const [profil, setProfil] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const submit = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne sont pas identique");
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/main/signup`,
        data: {
          name: userName,
          firstName: firstName,
          lastName: lastName,
          email: email,
          profil: "profil",
          password: password,
        },
      })
        .then((message) => {
          console.log(message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="right_side">
      <div className="right_side_title">S'inscrire</div>
      <form
        action=""
        className="sign_in_form"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="name"
            id="name"
            placeholder="Votre prenom"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="firstName"
            id="fistName"
            placeholder="Votre nom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form_control">
          <input
            className="user_input"
            type="text"
            name="lastName"
            id="user_name"
            placeholder="Votre post-nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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

        <div className="form_control">
          <input
            className="user_input"
            type="password"
            name="confirmPassword"
            id="user_confirm_password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p className="errorMessage">{errorMessage ? errorMessage : ""}</p>

        <button className="connexion_btn">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;
