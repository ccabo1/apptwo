import firebase from "firebase";
import React, { Component } from "react";
import ResCol from "../helper/ResCol";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location = "/";
      }
    });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .catch(error => {
        if (error) {
          alert(error.message);
        } else {
          console.log("in else");
        }
      });
  }

  render() {
    return (
      <ResCol>
        <div className="white pad-2 shade-1 round-1">
          <form onSubmit={this.handleSubmit}>
            <h2 className="marg-bot-1">Login</h2>

            <label>Email</label>
            <input
              type="email"
              className="form-control marg-bot-1"
              value={this.state.username}
              onChange={this.handleChangeUsername}
              required="true"
            />

            <label>Password</label>
            <input
              type="password"
              className="form-control marg-bot-1"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required="true"
            />
            <input
              type="submit"
              className={
                this.state.password.length && this.state.username.length ?
                  "btn white shade-3 hover cursor white-text purple bold" :
                  "disabled btn white shade-3 hover cursor white-text purple bold"
              }
              value="Login"
            />

            <p className="blue-gray-text marg-top-2 marg-bot-0">
              Don't have an account?{" "}
              <a href="./register" className="purple-text">
                Register here.
              </a>
            </p>
          </form>
        </div>
      </ResCol>
    );
  }
}

export default Login;
