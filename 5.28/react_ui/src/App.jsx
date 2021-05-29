import React from "react";
import { Button, Tooltip, DatePicker, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class App extends React.Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          style={{ backgroundColor: "red" }}>
          按钮
        </Button>
        <Space direction="vertical">
          <DatePicker onChange={this.onChange} />
          <DatePicker onChange={this.onChange} picker="week" />
          <DatePicker onChange={this.onChange} picker="month" />
          <DatePicker onChange={this.onChange} picker="quarter" />
          <DatePicker onChange={this.onChange} picker="year" />
        </Space>
        ,
      </div>
    );
  }
}
export default App;
