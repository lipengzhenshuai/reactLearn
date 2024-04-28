import React, { useState, useMemo } from "react";

const AAA = () => {
  const [name, setName] = useState("lipeng");

  console.log("AAA");

  const CCC = useMemo(
    () => {
      console.log("CCC没变化");
      console.log(name);
      return <div>{name}C没变化</div>;
    },
    [name]
  );

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
      {CCC}
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
