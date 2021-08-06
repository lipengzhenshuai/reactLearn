import React, { useRef } from "react";

const Demo = (props) => {
  const inputElement = useRef();

  const handleFocusInput = () => {
    //  @ts-ignore
    inputElement?.current.focus();
    //  @ts-ignore
    console.log(inputElement?.current.value);
  };

  return (
    <div>
      <button onClick={handleFocusInput}>1111</button>
    </div>
  );
};

export default Demo;
