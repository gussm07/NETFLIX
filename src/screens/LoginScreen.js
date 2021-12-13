import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSigIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSigIn(true)} className="loginScreen__button">
          Sign in
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {/* SI LA VARIABLE signIn ES VERDADERA */}
        {/* O SEA QUE SE PRESIONO EL BOTON GET STARTED O SIGN IN */}
        {/* ARROJA A LA VENTANA SignUpScreen */}
        {signIn ? (
          <SignUpScreen />
        ) : (
          /* SI NO HA SIDO PRESIONADO NINGUN BOTON... */
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Enter your email" />
                <button
                  onClick={() => setSigIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
