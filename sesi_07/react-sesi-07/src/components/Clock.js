//Mounting

import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <h1>Hello, world</h1>
        <h2>It is {this.set.apply.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

export default Clock