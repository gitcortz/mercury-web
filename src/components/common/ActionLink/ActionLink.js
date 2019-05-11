import React, { Component } from "react";

class ActionLink extends Component {
  render() {
    return (
      <a href="#" className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default ActionLink;
