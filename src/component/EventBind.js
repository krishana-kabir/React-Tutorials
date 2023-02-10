import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "hello !, how are you",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>Press</button>
        <button onClick={() => this.clickHandler()}>Press</button> */}
        <button onClick={this.clickHandler}>Press</button>
      </div>
    );
  }
}

export default EventBind;
