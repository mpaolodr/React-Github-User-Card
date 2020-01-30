import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

class ChangeUser extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser: ""
    };
  }

  //handle changes
  handleChange = e => {
    this.setState({
      newUser: e.target.value
    });
  };

  //handle submit
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeUser(this.state.newUser);
    this.setState({
      newUser: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ind-field">
          <input
            type="text"
            name="newUser"
            placeholder="Enter User Name"
            value={this.state.newUser}
            onChange={this.handleChange}
          />
          <button>
            <FontAwesomeIcon icon={faUsers} />
          </button>
        </div>
      </form>
    );
  }
}

export default ChangeUser;
