import React, { useState } from "react";

const Comp1 = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    // 触发变更
    setCount();
  };

  const subtract = () => {
    // 触发变更
    setCount();
  };

  return (
    <div>
      <div className="name">
        <button onClick={plus}>++</button>
      </div>
      <div className="age">
        <button onClick={subtract}>--</button>
      </div>
      <div>
        <div>number:{count}</div>
      </div>
    </div>
  );
};

export default Comp1;
