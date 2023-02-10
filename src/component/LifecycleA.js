import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "krishan",
    };
    console.log("LifecyleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  render() {
    console.log("Lifecyle render");
    return (
      <div>
        <div>LifecycleA</div>;<LifecycleB></LifecycleB>
      </div>
    );
  }
}

export default LifecycleA;
