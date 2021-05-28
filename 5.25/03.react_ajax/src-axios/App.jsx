import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };
  // 发送请求
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get("https://api.github.com/search/repositories?q=r&sort=stars")
      .then((res) => {
        const { name, html_url } = res.data.items[0];

        // 更新state
        this.setState({
          isLoading: false,
          repo: {
            name,
            html_url,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        alert("网络异常，请稍后重试");
      });
  }
  render() {
    const { isLoading, repo } = this.state;
    if (isLoading) {
      return <h1>loading...</h1>;
    }
    return (
      <h1>
        most star repo is <a href={repo.html_url}>{repo.name}</a>
      </h1>
    );
  }
}
