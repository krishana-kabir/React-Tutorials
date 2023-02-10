import React, { Component } from "react";
import LifecycleBB from "./LifecycleBB";

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

  shouldComponentUpdate(prevProps, prevState) {
    console.log("LifecycleAA shouldComponentUpdateAA");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleAA getSnapshotBeforeUpdat");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecylceAA  componentDidUpdate");
  }

  changeState() {
    this.setState({
      name: "codevaulation",
    });
  }
  render() {
    console.log("Lifecyle render");
    return (
      <div>
        <div>LifecycleA</div>;
        <button onClick={this.changeState}>Change State</button>
        <LifecycleBB></LifecycleBB>
      </div>
    );
  }
}

export default LifecycleA;
