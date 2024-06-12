import { useState, useEffect, useRef } from "react";

const Demo = (props) => {
  const button = useRef(null);
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 5);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(2);
    }, 1000);
    setTimeout(() => {
      button.current.click();
    }, 1020);
  }, []);

  return (
    <div className="firstLoad">
      {Array.from({ length: 5000 }).map((_, index) => (
        <span key={index} className="firstLoad__item">
          {count}
        </span>
      ))}
      <button ref={button} onClick={updateCount}>更新</button>
    </div>
  );
};

export default Demo;
