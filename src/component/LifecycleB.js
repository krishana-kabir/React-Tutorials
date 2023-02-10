import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "krishan",
    };
    console.log("LifecyleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  render() {
    console.log("Lifecyle render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
