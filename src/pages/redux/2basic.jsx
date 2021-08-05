import React from "react";
import store from "./store/index";
import { Provider, connect } from "react-redux";

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

const CounterPlus = connect(mapStateToProps)(Counter);

const A = () => {
  return (
    <div>
      <Provider store={store}>
        <CounterPlus />
      </Provider>
    </div>
  );
};

export default A;
