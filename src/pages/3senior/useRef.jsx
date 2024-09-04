import { useRef } from "react";

/**
 *
 * * useRef是一个返回可变对象的Hook，其.current属性被初始化为传入的参数（initialValue）。
 * * 返回的ref对象在组件的整个生命周期中保持不变。
 * * 当ref对象的current属性被修改时，组件不会重新渲染。
 * * useRef的主要作用是保存状态，其.current属性可以保存任何可变值。
 * * 在函数组件中，可以使用useRef保存任何可变值。
 * * 通常保存某个dom对象，或者计时器，等等；
 *
 */

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("你点击了 " + ref.current + " 次！");
  }

  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <button onClick={handleClick}>点击我！</button>
      <br />
      {/* ref指向dom */}
      <input ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  );
}
