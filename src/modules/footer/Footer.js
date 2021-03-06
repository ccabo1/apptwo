import React, { Component } from "react";
import FooterNavigation from "./FooterNavigation";

class Footer extends Component {
  render() {
    return (
      <div className="white-blue pad-2 bord-top-blue-gray">
        <div className="container blue-gray-text">
          <div className="row">
            <div className="col-12 col-md-4">
              <h2>AppTwo</h2>
              <p>
                Created by Cameron Cabo, Terry Jo, James Xue, and Adam Ripley.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <p className="bold">Navigation</p>
              <FooterNavigation isLoggedIn={this.props.isLoggedIn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
