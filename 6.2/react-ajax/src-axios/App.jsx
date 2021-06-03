import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get("https://api.github.com/search/repositories?q=r&sort=stars")
      .then((response) => {
        const { name, html_url } = response.data.items[0];
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
      });
  }

  render() {
    const { isLoading, repo } = this.state;
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <h1>
        most star repo is <a href={repo.html_url}>{repo.name}</a>
      </h1>
    );
    /* return (
      <div>
        <h1 style={{ display: isLoading ? "block" : "none" }}>Loading...</h1>
        <h1 style={{ display: !isLoading ? "block" : "none" }}>
          most star repo is xxx
        </h1>
      </div>
    ); */
  }
}
