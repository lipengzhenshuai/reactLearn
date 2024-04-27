import React from "react";

/**
 *
 * 受控组件:
 *
 * TODO:
 * 非受控组件
 *
 * TODO:
 * formik
 */

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "xxxxxx",
      selected: "orange",
      m1: "m1",
      m2: "m2",
      m3: "m3",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.handleMultyChange = this.handleMultyChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    alert("content:" + this.state.value + "&&&&" + this.state.selected);
    event.preventDefault();
  }

  changeSelect(event) {
    this.setState({ selected: event.target.value });
  }

  handleMultyChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    //  TODO: 受控输入空值
    function SetTime1000() {
      let a = (
        <div>
          <input type="text" value="ssss" />
        </div>
      );
      setTimeout(() => {
        a = (
          <div>
            <input type="text" value={null} />
          </div>
        );
      }, 1000);
      return a;
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
          <br />
          <select value={this.state.selected} onChange={this.changeSelect}>
            <option value="orange">orange</option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="watermelon">watermelon</option>
          </select>
          <br />
          <input
            type="text"
            value={this.state.m1}
            name="m1"
            onChange={this.handleMultyChange}
          />
          <br />
          <input
            type="text"
            value={this.state.m2}
            name="m2"
            onChange={this.handleMultyChange}
          />
          <br />
          <input
            type="text"
            value={this.state.m3}
            name="m3"
            onChange={this.handleMultyChange}
          />
          <br />

          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}
