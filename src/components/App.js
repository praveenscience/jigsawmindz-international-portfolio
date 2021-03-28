import React, { Component } from "react";
import Header from "./Header";
import Config from "../constants/config.json";

class App extends Component {
  state = {
    Dark: true
  };
  componentDidMount() {
    document.title = Config.Name + "'s Portfolio";
  }
  render() {
    return (
      <div className="App">
        <Header
          className="Header"
          dark={this.state.Dark}
          items={[
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
          ]}
        >
          {Config.Name}
        </Header>
      </div>
    );
  }
}

export default App;
