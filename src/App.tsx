import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>poop</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
