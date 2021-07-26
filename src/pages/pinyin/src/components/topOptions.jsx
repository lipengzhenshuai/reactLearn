import React from "react";
import { decorationSvgs } from "../utils/svg_constants.jsx";

function TopOptions(props) {
  const { showWord, showPinyin } = props.config.options;
  const checkedSvgs = decorationSvgs.checked;
  return (
    <div>
      <div className="py-line-item py-line-item-btn">
        <span className={showWord ? "checked py-checkbox" : "py-checkbox"}>
          {checkedSvgs}
        </span>
        <span className="py-tab">显示汉字</span>
      </div>
      <div className="py-line-item py-line-item-btn">
        <span className={showPinyin ? "checked py-checkbox" : "py-checkbox"}>
          {checkedSvgs}
        </span>
        <span className="py-tab">显示拼音</span>
      </div>
    </div>
  );
}

export default TopOptions;
