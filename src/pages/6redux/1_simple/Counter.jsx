import React from "react";
import { connect } from "react-redux";


/**
 * * 使用高阶组件的方式，将组件包裹起来，获取到redux的state和dispatch
 * 
 */

const Counter = (props) => {
  const increment = () => {
    props.dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        {/* props读取state的值 */}
        <span className="count">{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

// 添加这个函数:
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

// 高阶函数将组件包裹起来，connect注册state变化事件，然后更新子组件
export default connect(mapStateToProps)(Counter);
