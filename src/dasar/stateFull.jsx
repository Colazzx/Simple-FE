import React, { Component } from "react";

export default class StateFull extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Name: {this.props.nama}</h1>
          <br />
          <h1>Job: {this.props.job}</h1>
        </div>
      </>
    );
  }
}
