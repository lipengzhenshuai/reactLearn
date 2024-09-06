import React, { useState, useEffect } from 'react';

/**
 * https://juejin.cn/post/7399453056973045798?searchId=20240906215421328F6ACC46DDD3CE4096
 * 
 * 由于闭包，导致这个setInterval访问的count都是0
 *  解决方案：
 *    1.将count作为依赖，当count值变化的时候里面的count也会变化
 *    2.将setCount写成函数形式
 *      setCount(prevCount => prevCount + 1)
 *        写成函数形式，setCount传入的函数执行的时候传染的是react维护的最新值
 * 
 */

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Count: ${count}`);
      setCount(count + 1); // 这里的 count 始终是初始值 0
    }, 1000);

    return () => clearInterval(interval); // 清理定时器
  }, []); // 空依赖数组

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
