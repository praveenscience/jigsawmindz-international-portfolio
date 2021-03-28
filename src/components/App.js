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
          items={Config.Sections.map(section => (
            <li className="nav-item" key={section.Name}>
              <a
                className="nav-link"
                href={section.Link ? section.Link : "#" + section.Name}
              >
                {section.Name}
              </a>
            </li>
          ))}
        >
          {Config.Name}
        </Header>
        {Config.Sections.map(section => (
          <section id={section.Name} key={section.Name}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>{section.Name}</h2>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default App;
