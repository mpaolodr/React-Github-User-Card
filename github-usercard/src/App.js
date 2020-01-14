import React from "react";

// COMPONENTS
import User from "./components/User";
import Followers from "./components/Followers";
import ChangeUser from "./components/ChangeUser";

//STYLES
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      userFollowers: [],
      newUser: ""
    };
  }

  //fetch initial data
  componentDidMount() {
    fetch("https://api.github.com/users/mpaolodr")
      //convert to json
      .then(initialRes => initialRes.json())
      .then(res => {
        this.setState({ user: res });
        //fetch user's followers
        fetch(res.followers_url)
          .then(initialRes => initialRes.json())
          .then(res => this.setState({ userFollowers: res }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newUser !== this.state.newUser) {
      console.log("state has changed");
      fetch(`https://api.github.com/users/${this.state.newUser}`)
        //convert to json
        .then(initialRes => initialRes.json())
        .then(res => {
          this.setState({ user: res });

          //for changing state of userFollower
          fetch(res.followers_url)
            .then(initialRes => initialRes.json())
            .then(res => this.setState({ userFollowers: res }))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  }

  //function to change user
  changeUser = newUserName => {
    this.setState({
      newUser: newUserName
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="title">GitHub User Card</h2>
          <ChangeUser changeUser={this.changeUser} />
        </div>
        <div className="main-container">
          <User user={this.state.user} />
          <Followers userFollowers={this.state.userFollowers} />
        </div>
      </div>
    );
  }
}

export default App;
