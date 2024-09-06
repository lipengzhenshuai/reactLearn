import { decorationSvgs } from "../utils/svg_constants.ts";
import { useSelector, useDispatch } from "react-redux";

const checkedSvgs = decorationSvgs.checked;

const Top = () => {
  const config = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateWordType = (type) => {
    switch (type) {
      case "showWord":
        dispatch({ type: "showWord" });
        break;
      case "showPinyin":
        dispatch({ type: "showPinyin" });
        break;
      case "markTone":
        return dispatch({ type: "markTone" });
      default:
        return;
    }
  };
  return (
    <div>
      {showHanZi(config, updateWordType)}
      {showYinBiao(config, updateWordType)}
      {showYinDiao(config, updateWordType)}
    </div>
  );
};

const showHanZi = (config, updateWordType) => {
  const { wordType, showWord } = config.options;
  return wordType === 2 ? (
    <div></div>
  ) : (
    <div
      onClick={() => updateWordType("showWord")}
      className="py-line-item py-line-item-btn"
    >
      <span
        className={`py-checkbox ${showWord ? "checked" : ""}`}
        dangerouslySetInnerHTML={{ __html: checkedSvgs }}
      ></span>
      <span className="py-tab">显示汉字</span>
    </div>
  );
};

const showYinBiao = (config, updateWordType) => {
  const { wordType, showPinyin } = config.options;
  return wordType === 3 ? (
    ""
  ) : (
    <div
      onClick={() => updateWordType("showPinyin")}
      className="py-line-item py-line-item-btn"
    >
      <span
        className={`py-checkbox ${showPinyin ? "checked" : ""}`}
        dangerouslySetInnerHTML={{ __html: checkedSvgs }}
      ></span>
      <span className="py-tab">显示拼音</span>
    </div>
  );
};

const showYinDiao = (config, updateWordType) => {
  const { wordType, markTone } = config.options;
  return wordType === 3 ? (
    ""
  ) : (
    <div
      onClick={() => updateWordType("markTone")}
      className="py-line-item py-line-item-btn"
    >
      <span
        className={`py-checkbox ${markTone ? "checked" : ""}`}
        dangerouslySetInnerHTML={{ __html: checkedSvgs }}
      ></span>
      <span className="py-tab">标注音调</span>
    </div>
  );
};

export default Top;
