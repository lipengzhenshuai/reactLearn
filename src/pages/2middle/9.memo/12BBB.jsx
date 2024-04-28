import React, { useState, memo, useCallback } from "react";

const ChildComponent = memo(({ text, changeText }) => {
  console.log('子组件执行了');
  return (
    <>
      <p>text is: {text}</p>
      <button onClick={()=>changeText('改变文案')}>按钮</button>
    </>
  )
});

const ParentComponent = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('我是父组件传入子组件的文案');

  const handleChange = () => {
    setNumber(number + 1);
  };

  const changeText = useCallback((newText) => {
    setText(newText);
  }, []);  // 此依赖项必不可少，否则会每次渲染都会执行，从而useCallback就没有意义了

  // const changeText = (newText) => {
  //   setText(newText);
  // };  // 此依赖项必不可少，否则会每次渲染都会执行，从而useCallback就没有意义了

  return (
    <>
      <button onClick={handleChange}>clike me</button>
      <p>count: {number}</p>
      <ChildComponent text={text} changeText={changeText}  />
    </>
  )
};

export default ParentComponent;
