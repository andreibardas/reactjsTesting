import React, {Component} from "react";
import "./App.scss";
import Login from "./Login-component/Login.component";

//AICI EFECTIV E JS UL PRINCIPAL (MAIN) UNDE NE FOLOSIM COMPONENTA LOGIN CREATA SI IMPORTATA MAI SUS 

class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/*ASTA I COMPONENTA NOASTRA */}
        <Login/>
      </div>
    );
  }
}



export default App;