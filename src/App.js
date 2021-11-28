import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import React from "react";
import Home from './pages/Home'
import NewCar from './pages/NewCar'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Switch
} from 'react-router-dom';
import Car from './pages/Car'
import SignIn from "./pages/Login";
import RoutGuard from "./Components/RoutGuard";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/car">Car</Link>
            </li>
            <li>
              <Link to="/newcar">NewCar</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <hr />

          <Routes>

            <Route
              exact path="/"
              element={
                <RoutGuard>
                  <Home />
                </RoutGuard>
              }
            />

            <Route
              exact path="/login"
              element={

                <SignIn />
              }
            />

            <Route
              path="/car"
              element={<RoutGuard>
                <Car />
              </RoutGuard>
              }
            />

            <Route
              path="/newcar"
              element={<RoutGuard><NewCar /></RoutGuard>}
            />

          </Routes>
        </div>
      </BrowserRouter>

    </Fragment>
  );
}

//<div className="container formContainer">
//<Formulario />
//</div>

export default App;
