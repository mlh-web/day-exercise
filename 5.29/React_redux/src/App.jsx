import React, { Component } from "react";
import store from "./redux/store";
import { increment, decrement } from "./redux/action-creators.js";
export default class App extends Component {
  state = {
    num: 1,
  };
  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
  };
  increment = () => {
    const action = increment(this.state.num);
    store.dispatch(action);
  };
  decrement = () => {
    const action = decrement(this.state.num);
    store.dispatch(action);
  };
  incrementIfOdd = () => {
    const count = store.getState();
    if (count % 2 === 0) return;
    this.increment();
  };
  incrementAsync = () => {
    setTimeout(() => {
      this.increment();
    }, 2000);
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    const count = store.getState();
    return (
      <div>
        <h1>click {count} times</h1>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}
