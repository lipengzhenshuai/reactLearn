import React from "react";
import "./index.css";

const Box = () => {
  return <div className="css-center-box"></div>;
};

const Center = (props) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="css-center-container">
      {list.map((item, index) => {
        return <Box key={index} />;
      })}
    </div>
  );
};

export default Center;
