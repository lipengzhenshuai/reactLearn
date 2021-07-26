import React from "react";
import { decorationSvgs } from "../utils/svg_constants.jsx";

function PinyinOptions(props) {
  const { pinyinType } = props.config.options;
  const { form_font, first_upper_font, all_upper_font } = decorationSvgs;

  return (
    <>
      <div
        id="{IDs.FORM}"
        data-value="0"
        className={pinyinType === 0 ? "active py-list-item" : "py-list-item"}
      >
        <span className="py-low2">{form_font}</span>
        <span>标准样式</span>
      </div>
      <div
        id="{IDs.FIRSTUP}"
        data-value="1"
        className={
          pinyinType === 1
            ? "active disable py-list-item"
            : "disable py-list-item"
        }
      >
        <span className="py-low2">{first_upper_font}</span>
        <span>首字大写</span>
      </div>
      <div
        id="{IDs.ALLUP}"
        data-value="2"
        className={
          pinyinType === 2
            ? "active py-list-item disable last"
            : "py-list-item disable last"
        }
      >
        <span className="py-low2">{all_upper_font}</span>
        <span>全大写</span>
      </div>
    </>
  );
}

export default PinyinOptions;
