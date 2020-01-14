import React from "react";

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
        <h2>Component Here</h2>
      </div>
    );
  }
}

export default App;
