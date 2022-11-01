import React, { useState, useEffect, useRef } from "react";

const FancyButton = (props) => {
  const { ref1 } = props
  const [name] = useState('lipeng');
  useEffect(() => {
    ref1.current = sayHello;
  });
  const sayHello = () => {
    console.log(name);
  };
  return (<div>子组件</div>);
};

const A = () => {
  const ref = useRef();
  const logRunRef = () => {
    console.log(ref.current);
    ref.current();
  };

  return (
    <div>
      <button onClick={logRunRef}>输出REF（父组件）</button>
      <FancyButton ref1={ref}>Click me!</FancyButton>
    </div>
  );
};
export default A;
