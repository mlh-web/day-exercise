import { Component } from "react";

export default class UserList extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <a href="https://github.com/aa" target="_blank">
            <img
              src="https://avatars1.githubusercontent.com/u/28438?v=4"
              style={{ width: "100px" }}
            />
          </a>
          <p className="card-text">aa</p>
        </div>
      </div>
    );
  }
}
