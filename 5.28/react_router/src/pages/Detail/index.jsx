import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    details: [
      { id: 1, title: "message001", content: "message content001" },
      { id: 2, title: "message002", content: "message content002" },
      { id: 3, title: "message003", content: "message content003" },
    ],
  };
  render() {
    const id = +this.props.match.params.id;
    const detail = this.state.details.find((detail) => detail.id === id);
    return (
      <ul>
        <li>id:{detail.id}</li>
        <li>title:{detail.title}</li>
        <li>content:{detail.content}</li>
      </ul>
    );
  }
}
