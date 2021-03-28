import React, { Component } from "react";
import Header from "./Header";
import Config from "../constants/config.json";

class App extends Component {
  componentDidMount() {
    document.title = Config.Name + "'s Portfolio";
  }

  render() {
    return (
      <div className="App">
        <Header dark={true}>{Config.Name}</Header>
      </div>
    );
  }
}

export default App;
