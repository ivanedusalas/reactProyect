import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import React from "react";
import Formulario from "./Components/formulario";

function App() {
  return (
    <Fragment>
      <div className="container formContainer">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
