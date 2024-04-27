import React from "react";
export default class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "lipeng", arr: [1, 2, 3, 4, 5] };
  }

  // 不能通过返回false阻止默认事件
  // 使用箭头函数避免this指向问题
  showName = () => {
    alert(this.state.name);
  };

  deleteRow = (id, e) => {
    this.setState({
      arr: this.state.arr.filter((element) => element !== id),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.showName}>点击</button>
        </div>
        <div>
          {this.state.arr.map(item => (
            <button onClick={(e) => this.deleteRow(item, e)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
