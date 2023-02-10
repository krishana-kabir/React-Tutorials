import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topics: "react",
    };
  }

  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlercommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`);
    event.preventDefault();
  };
  render() {
    const { username, comments, topics } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={this.handlerUsernameChange}
          ></input>
        </div>

        <div>
          <label>comments</label>
          <textarea
            value={comments}
            onChange={this.handlercommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topics</label>
          <select value={topics} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
