import { createStore } from 'redux'
import React from 'react';

// 处理函数
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 创建一个store
let store = createStore(counter)
// 当数据发生变化的时候触发
store.subscribe(()=> {console.log(store.getState())});

class HelloWorld extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    plus = () => {
      // 触发变更
      store.dispatch({ type: 'INCREMENT' })
      this.setState({state: store.getState()});
    }

    subtract = () => {
      // 触发变更
      store.dispatch({ type: 'DECREMENT' })
      this.setState({state: store.getState()});
    }

    render() {
        return <div>
          <div className="name"><button onClick={this.plus}>++</button></div>
          <div className="age"><button onClick={this.subtract}>--</button></div>
          <div>
            <div>number:{store.getState()}</div>
          </div>
        </div>;
    }
}

export default HelloWorld;

