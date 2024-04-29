# 中间件机制

## 理解 compose 函数 不理解可以到 chatGpt 问问

```js
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
```

这块的主要逻辑是：
  1.compose函数将所有中间件函数组合成一个从右到左执行的一个函数
    左边的函数接收的参数是右边函数的返回值
  2.执行这个函数，每个函数的返回值又是个函数
    那么最后又会形成一个从左到右执行的函数
  3.这样就实现了中间件的洋葱模型
  4.最后一项是store.dispatch
  