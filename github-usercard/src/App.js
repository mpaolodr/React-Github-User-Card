import React from "react";

// COMPONENTS
import User from "./components/User";

//STYLES
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="title">GitHub User Card</h2>
        </div>
        <div className="main-container">
          <User />
        </div>
      </div>
    );
  }
}

export default App;
