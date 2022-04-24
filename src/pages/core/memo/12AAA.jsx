import React, { useState, memo } from "react";

const CCC = memo(() => {
  console.log("DDD没变化");
  return <div>D没变化</div>;
});

const AAA = () => {
  const [name, setName] = useState("lipeng");

  console.log("AAA");
  return (
    <div>
      <button
        onClick={() => {
          setName(name + "1");
        }}
      >
        点击
      </button>
      <BBB name={name}></BBB>
      <CCC></CCC>
    </div>
  );
};

const BBB = (props) => {
  const { name } = props;
  console.log("BBB-name " + name);
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default AAA;
