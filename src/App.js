import "./App.css";
import { Score } from "./components/Score";
import { Solution } from "./components/Solution";
import { Letters } from "./components/Letters";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Score />
        <Solution />
        <Letters />
      </div>
    );
  }
}

export default App;
