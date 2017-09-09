import * as firebase from "firebase";
import { firebaseApp } from "../firebase.js";

import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUsername(event) {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.username);
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .catch(error => {
        alert(error.message);
        console.log(
          "Error registering with firebase",
          error.code,
          error.message
        );
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>

        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Register;
