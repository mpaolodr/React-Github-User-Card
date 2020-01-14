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

  //fetch initial data
  componentDidMount() {
    fetch("https://api.github.com/users/mpaolodr")
      //convert to json
      .then(initialRes => initialRes.json())
      .then(res => this.setState({ user: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="title">GitHub User Card</h2>
        </div>
        <div className="main-container">
          <User user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
