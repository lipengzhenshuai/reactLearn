import React from "react";
import { decorationSvgs } from "../utils/svg_constants.jsx";

function TopOptions(props) {
  const { updateOperate } = props;
  const { showWord, showPinyin } = props.config.options;
  const checkedSvgs = decorationSvgs.checked;

  const update = (type) => {
    if(type === 1) {
      updateOperate("showWord", !showWord);
    } else {
      updateOperate("showPinyin", !showPinyin);
    }
  }

  return (
    <div>
      <div className="py-line-item py-line-item-btn" onClick={() => update(1)}>
        <span className={showWord ? "checked py-checkbox" : "py-checkbox"}>
          {checkedSvgs}
        </span>
        <span className="py-tab">显示汉字</span>
      </div>
      <div className="py-line-item py-line-item-btn" onClick={() => update(2)}>
        <span className={showPinyin ? "checked py-checkbox" : "py-checkbox"}>
          {checkedSvgs}
        </span>
        <span className="py-tab">显示拼音</span>
      </div>
    </div>
  );
}

export default TopOptions;
