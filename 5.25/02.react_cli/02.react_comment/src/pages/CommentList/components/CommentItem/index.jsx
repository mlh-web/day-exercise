import { Component } from "react";
import PropTypes from "prop-types";

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  };
  
  del = () => {
    
  };
  render() {
    const { username, content } = this.props.comment;

    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={this.del}>删除</button>
        </div>
        <p className="user">
          <span>{username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
