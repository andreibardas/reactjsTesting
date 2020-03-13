import React, {Component} from "react";
import "./App.scss";
import Login from "./Login-component/Login.component";

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}



export default App;