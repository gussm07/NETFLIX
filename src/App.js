import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  /* TEST PARA ENTRAR SIN HABER LOGGEADO */
  /* const user = {
    name: "sonny",
  }; */
  const user = null;

  /* const dispatch = useDispatch(); */

  /* ESTO PERMITIRA LA PERSISTENCIA EN LA APP, YA QUE 
  SI NOS ENCONTRAMOS EN UN MOMENTO DONDE ESTAMOS LOGGEADOS
  Y AL MOMENTO DE REFRESCAR LA PAGINA, ESTA NO TENGA QUE
  PEDIR NUEVAMENTE EL LOGGEO, HASTA HABER PRESIONADO LOG OUT*/

  return (
    <div class="app">
      {/* LIBRERIA REACT-ROUTER */}
      <Router>
        {/* SI NO HAY USUARIO LOGGEADO, BRINCA A LOGIN */}
        {!user ? (
          <LoginScreen />
        ) : (
          /* SI YA HAY USUARIO LOGGEADO, INICIA TODO */
          <Switch>
            <Route path="/test">
              <LoginScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
