import React, { Component } from "react";

class LifecycleBB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "krishan",
    };
    console.log("LifecyleBB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleBB getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleBB componentDidMount");
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("LifecycleBB shouldComponentUpdateBB");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleBB getSnapshotBeforeUpdat");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecylceBB  componentDidUpdate");
  }
  render() {
    console.log("Lifecyle render");
    return <div>LifecycleBB</div>;
  }
}

export default LifecycleBB;
