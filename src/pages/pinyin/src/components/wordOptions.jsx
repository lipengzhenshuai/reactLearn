import React from "react";
import { decorationSvgs } from "../utils/svg_constants.jsx";

function WordOptions(props) {
  const { wordType } = props.config.options;
  const { up_down, left_right, four_line, square, combine } = decorationSvgs;
  return (
    <>
      <div
        data-value="0"
        className={wordType === 0 ? "active py-list-item" : "py-list-item"}
      >
        <span className="py-low1">{up_down}</span>
        <span>拼音上下</span>
      </div>
      <div
        id="{IDs.LEFTRIGHT}"
        data-value="1"
        className={wordType === 1 ? "active py-list-item" : "py-list-item"}
      >
        <span className="py-low1">{left_right}</span>
        <span>拼音左右</span>
      </div>
      <div
        id="{IDs.FOURLINE}"
        data-value="2"
        className={
          wordType === 2
            ? "active py-list-item disable"
            : "py-list-item disable"
        }
      >
        <span className="py-low2">{four_line}</span>
        <span>四线三格</span>
      </div>
      <div
        id="{IDs.SQUARE}"
        data-value="3"
        className={
          wordType === 3
            ? "active py-list-item disable"
            : "py-list-item disable"
        }
      >
        <span className="py-low2">{square}</span>
        <span>田字格</span>
      </div>
      <div
        data-value="4"
        className={
          wordType === 4
            ? "py-list-item disable  active"
            : "py-list-item disable "
        }
      >
        <span>{combine}</span>
        <span>组合形式</span>
      </div>
    </>
  );
}

export default WordOptions;
