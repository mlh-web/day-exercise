import { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class Search extends Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
  };
  state = {
    searchName: "",
  };

  shouldComponentUpdate(props, state) {
    /* 
    当state发生变化的时候，返回true，重新渲染
    当state没有变化，返回false，不要渲染
      避免由于App重新渲染导致Search也要重新渲染
    */
    // console.log("新", state);
    // console.log("旧", this.state);
    /* if ((state.searchName = this.state.searchName)) {
      return false;
    }
    return true;
  } */
  return state.searchName !== this.state.searchName

  handleChange = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    });
  };
  search = async () => {
    const { searchName } = this.state;
    if (!searchName) {
      alert("请输入需要查询的内容");
      return;
    }
    // 搜索
    // 改变Loading
    this.props.setLoading(true);
    // 发送请求
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${searchName}`,
      });
      // 请求成功后，改变Loading和users的值
      this.props.setLoading(false);
      const users = response.data.items.map((user) => ({
        id: user.id,
        avatar_url: user.avatar_url,
        login: user.login,
        html_url: user.html_url,
      }));
      this.props.setUsers(users);
    } catch (e) {
      // 请求失败，改变Loading
      alert("网络连接失败");
      // console.log(e);
      this.props.setLoading(false);
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
