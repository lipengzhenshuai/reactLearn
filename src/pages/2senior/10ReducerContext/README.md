# 组合使用 reducer 和 context

## 基本使用

```jsx
import React, { createContext, useReducer } from "react";

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
```

## 2. 说明

- 1.`AppContext` 是一个 context 对象，使用 `createContext` 创建。并通过 `AppProvider` 提供给子组件使用。

  ```js
  const AppContext = createContext();
  ```

- 2.`reducer` 是一个纯函数，接收两个参数：`state` 和 `action`，返回新的 `state`。

  ```js
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { count: state.count + 1 };
      case "minus":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  ```

- 3.`useReducer` 是一个 hook，接收两个参数：`reducer` 和 `initialState`，返回一个数组：`[state, dispatch]`。

```js
 - const [state, dispatch] = useReducer(reducer, { count: 0 });
```

- 4.`AppContext`通过 `AppProvider` 提供给子组件使用，子组件通过 `useContext` 获取 `state` 和 `dispatch`。
- 子组件通过 `dispatch` 发送 `action`，`reducer` 根据 `action` 返回新的 `state`。

  ```js
  <AppContext.Provider value={{ state, dispatch }}>
    {props.children}
  </AppContext.Provider>
  ```

- 5.子组件获取 `state` 和 `dispatch`，并通过 `dispatch` 发送 `action`。

  ```js
  const { state, dispatch } = useContext(AppContext);
  dispatch({ type: "add" });
  ```
