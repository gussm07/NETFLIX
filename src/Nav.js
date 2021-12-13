import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  /* VARIABLE PARA MANEJAR EL ESTADO DE LA NAVBAR */
  /* SHOW, UTILIZADA EN EL CLASSNAME */
  const [show, handleShow] = useState(false);
  /* CUANDO LA SCROLLBAR ESTA POR DEBAJO DE 100 */
  /* CAMBIA EL ESTADO DE SHOW A TRUE */
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  /* MANEJA EL ESTADO DEL SCROLLBAR Y LO GUARDA EN transitionNavBar*/
  /* VARIABLE USADA EN EL ESTADO DE ARRIBA */
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </div>
  );
}

export default Nav;
