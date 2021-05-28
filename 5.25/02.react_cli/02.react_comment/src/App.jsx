import React from "react";

import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";
/* 
复制过来html需要修改
  1.将class改成className
  2.所有标签必须有结束符
    单便签 input
  3.style必须写成对象形式
*/
class App extends React.Component {
  // 初始化数据
  state = {
    comments: [
      { id: 1, username: "路人甲", content: "真难学" },
      { id: 2, username: "路人乙", content: "好难学" },
    ],
  };

  addComment = (username, content) => {
    // 不允许修改原数据
    const { comments } = this.state;
    this.setState({
      comments: [{ username, content, id: Date.now() }, ...comments],
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="col-md-4">
            <AddComment addComment={this.addComment} />
          </div>
          <div className="col-md-8">
            <CommentList comments={comments} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
