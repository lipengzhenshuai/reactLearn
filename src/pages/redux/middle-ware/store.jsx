import { createStore } from "redux";
// 创建store需要的reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 返回一个函数，执行这个函数，它可以将参数（为函数数组）从右向左顺序执行，并且将上个执行结果的返回值作为下个函数的参数传入
// 这个本身是利用函数作用域，可以保持函数作用域
// compose如果每个函数返回值是基本类型值的话，那么执行完是一个结果，这里每一个函数执行完返回的是中间件函数
function compose(...funcs) {
  console.log("funcs", funcs.length);
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  // a为上次中间件执行函数在外层，b为当前中间件函数在里层，也就实现从右往左执行
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

// 传入store
function logger1(store) {
  // 传入下一个要执行的函数，接受上个函数为参数，执行它
  return function (next) {
    // 传入真正的store.action
    return function (action) {
      console.log("老状态1", store.getState());
      next(action);
      console.log("新状态1", store.getState());
      return action;
    };
  };
}

function logger2(store) {
  return function (next) {
    return function (action) {
      console.log("老状态2", store.getState());
      next(action);
      console.log("新状态2", store.getState());
      return action;
    };
  };
}

// 传入插件-自己实现applyMiddleWare
function applyMiddleware(...middleWares) {
  // 传入store
  return function (createStore) {
    // 传入reducer
    return function (reducer) {
      let dispatch;
      const store = createStore(reducer);
      const middleWareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action), // 不能写成undefined,因为值传递，修改另一个变量影响这个值
      };
      const middlewareArr = middleWares.map((middleware) => middleware(middleWareAPI));
      // 为何这样？  建立中间件之间的关联
      dispatch = compose(...middlewareArr)(store.dispatch); // 给最后一个中间件，传入next，执行一层层函数
      return { ...store, dispatch };
    };
  };
}
// 读取中间件，传入createStore方法，传入reducer
export default applyMiddleware(logger1, logger2)(createStore)(reducer);
