import React from "react";

function LogIn() {
  return <div>hello back</div>;
}

function LogOut() {
  return <div>hello guest</div>;
}

function Greeting(props) {
  if (props.isLogin) {
    return <LogIn></LogIn>;
  } else {
    return <LogOut></LogOut>;
  }
}

/**
 *
 *
 * 1.与运算符同样可以实现判断逻辑
 *    true && expression 永远返回 expression
 *    false && expression 永远返回 false
 * 2.使用3目运算符同样可以实现条件渲染
 * 3.阻止渲染
 *
 *
 */

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  login = () => {
    this.setState({
      isLogin: true,
    });
  };

  logout = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    let button = "";
    if (this.state.isLogin) {
      button = <button onClick={this.logout}>退出</button>;
    } else {
      button = <button onClick={this.login}>登录</button>;
    }

    return (
      <div>
        <div>
          <Greeting isLogin={this.state.isLogin}></Greeting>
        </div>
        <div>{button}</div>
      </div>
    );
  }
}
