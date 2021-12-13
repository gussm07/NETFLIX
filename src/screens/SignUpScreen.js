import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../Firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    /* NIEGA AL PRESIONAR EL BOTON DE SIGNIN REFRESCAR LA PAGINA */
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        /* TOMA LOS VALORES DE LOS INPUT CON REF */
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  /* AL MOMENTO DE DAR CLICK EN SIGN IN, ARROJA UN OBJETO EN LA CONSOLA
   DE QUE YA ESTAS REGISTRADO Y TODO ESTA VALIDADO */
  const signIn = (e) => {
    /* NIEGA CON LA FUNCION ONCLICK REFRESCAR LA PAGINA AL PRESIONAR <SIGN UP NOW> */
    e.preventDefault();
    /* HACE LA AUTENTICACION  */
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ) /* SI PASA LA AUTENTICACION, MANDA OBJETO DE QUE ESTA BIEN  */
      .then((authUser) => {
        console.log(authUser);
      }) /* SI ESTA MAL LA AUTENTICACION, MUESTRA UN ERROR */
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        {/* EL REF ES UNA REFERENCIA PARA ATTACH LOS DATOS DE LOS INPUT */}
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          {/* SE HACE EL SPAN PARA APLICAR SOLO EL COLOR GRIS A ESE TEXTO */}
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
