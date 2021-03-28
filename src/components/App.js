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
            <a
              className="nav-link"
              target={section.Link ? "_blank" : null}
              rel="noreferrer"
              href={section.Link ? section.Link : "#" + section.Name}
              key={section.Name}
            >
              {section.Name}
            </a>
          ))}
        >
          {Config.Name}
        </Header>
        {Config.Sections.map(section =>
          section.Link ? null : (
            <section id={section.Name} key={section.Name}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <article>
                      <h2>{section.Name}</h2>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          )
        )}
      </div>
    );
  }
}

export default App;
