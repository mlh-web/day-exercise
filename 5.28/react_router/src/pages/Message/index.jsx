import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Detail from "../Detail";

export default class Message extends Component {
  push = (id) => {
    return () => {
      this.props.history.push(`/home/message/${id}`);
    };
  };
  replace = (id) => {
    return () => {
      this.props.history.replace(`/home/message/${id}`);
    };
  };
  back = () => {
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div>
        <h2>Message组件内容</h2>
        <ul>
          <li>
            <NavLink to="/home/message/1">message001</NavLink>
            <button onClick={this.push(1)}>push</button>
            <button onClick={this.replace(1)}>replace</button>
          </li>
          <li>
            <NavLink to="/home/message/2">message002</NavLink>
            <button onClick={this.push(2)}>push</button>
            <button onClick={this.replace(2)}>replace</button>
          </li>
          <li>
            <NavLink to="/home/message/3">message003</NavLink>
            <button onClick={this.push(3)}>push</button>
            <button onClick={this.replace(3)}>replace</button>
          </li>
        </ul>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        <Route path="/home/message/:id" component={Detail} />
      </div>
    );
  }
}
