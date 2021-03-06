import React, { Component } from "react";

class PageContainer extends Component {
  render() {
    return (
      <div className="white-blue">
        <div className="container min-height">
          <div className="space-2" />
          {this.props.children}
          <div className="space-2" />
        </div>
      </div>
    );
  }
}

export default PageContainer;
