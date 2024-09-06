import { Select, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { PinYinFont, WordFont } from "../utils/constants.ts";
import { decorationSvgs } from "../utils/svg_constants.ts";
import { FONTSIZEDEFAULT, EMRANGE, PTRANGE } from "../utils/data";
import {
  getFontSiezList,
  getFontFamilyList,
  getFontColorList,
} from "../utils/utils.ts";

const Panel = () => {
  const config = useSelector((state) => state);
  const dispatch = useDispatch();
  const { wordType } = config.options;
  return (
    <>
      <div className={`${wordType === 3 ? "py-hide-remain" : ""}`}>
        {panel1(config, dispatch)}
      </div>
      <div className={`${wordType === 2 ? "py-hide-remain" : ""}`}>
        {panel2(config, dispatch)}
      </div>
    </>
  );
};

const panel1 = (config, dispatch) => {
  const { pinyinStyle, wordStyle } = config.options;

  const update = (type, value) => {
    pinyinStyle[type] = value;
    return dispatch({ type: "pinyinStyle", config });
  };
  const {
    options: {
      pinyinStyle: { fontFamily, fontSize, color },
    },
  } = config;

  return (
    <>
      <div>拼音样式</div>
      <div>
        <Select
          value={fontFamily}
          defaultValue={"inherit"}
          dropdownStyle={{ zIndex: 10001 }}
          style={{ width: 80, borderRadius: 15, marginLeft: 5 }}
          options={getSelectList(PinYinFont.PYFont)}
          onChange={(value) => update("fontFamily", value)}
        ></Select>
      </div>
      <div>
        <Select
          value={fontSize}
          defaultValue={"默认"}
          dropdownStyle={{ zIndex: 10001 }}
          style={{ width: 80, borderRadius: 15, marginLeft: 5 }}
          options={getSelectList(PinYinFont.PYSize)}
          onChange={(value) => update("fontSize", value)}
        ></Select>
      </div>
      <div>
        <Select
          value={color}
          defaultValue={"inherit"}
          dropdownStyle={{ zIndex: 10001 }}
          style={{ width: 80, borderRadius: 15, marginLeft: 5 }}
          options={getSelectList(PinYinFont.PYColor)}
          onChange={(value) => update("color", value)}
        ></Select>
      </div>
    </>
  );
};

const panel2 = (config, dispatch) => {
  const {
    options: {
      wordStyle: { fontFamily, fontSize, color },
      fontWidth,
      useFontWidth,
      wordType,
    },
  } = config;
  const { nabla, font, checked } = decorationSvgs;

  const { wordStyle } = config.options;

  const update = (type, value) => {
    if (type === "useFontWidth") {
      return dispatch({ type: "useFontWidth" });
    }
    if (type === "fontWidth") {
      return dispatch({ type: "fontWidth", value });
    }
    wordStyle[type] = value;
    return dispatch({ type: "wordStyle", config });
  };

  const changeFontWidth = (e) => {
    const {
      wordStyle: { fontSize: wordFontSize },
      pinyinStyle: { fontSize: pinyinFontSize },
    } = config.options;
    const range =
      wordFontSize === FONTSIZEDEFAULT || pinyinFontSize === FONTSIZEDEFAULT
        ? EMRANGE
        : PTRANGE;
    let { value = range[0] } = e.target;
    if (value > range[1] || value < range[0]) {
      value = value > range[1] ? range[1] : range[0];
    }
    update("fontWidth", value);
  };

  return (
    <>
      <div>汉字样式</div>
      <div>
        <Select
          value={fontFamily}
          defaultValue={"inherit"}
          dropdownStyle={{ zIndex: 10001 }}
          style={{ width: 80, borderRadius: 15, marginLeft: 5 }}
          options={getSelectList(WordFont.WFont)}
          onChange={(value) => update("fontFamily", value)}
        ></Select>
      </div>
      <div>
        <Select
          value={fontSize}
          defaultValue={"默认"}
          dropdownStyle={{ zIndex: 10001 }}
          style={{ width: 80, borderRadius: 15, marginLeft: 5 }}
          options={getSelectList(WordFont.WSize)}
          onChange={(value) => update("fontSize", value)}
        ></Select>
      </div>
      <div>
        <Select
          value={color}
          defaultValue={"inherit"}
          dropdownStyle={{ zIndex: 10001 }}
          style={{ width: 80, borderRadius: 15, marginLeft: 5 }}
          options={getSelectList(WordFont.WColor)}
          onChange={(value) => update("color", value)}
        ></Select>
      </div>
      <div
        className={`${wordType === 0 ? "" : "hide"}`}
        style={{ margin: "0 8px" }}
      >
        字宽
      </div>
      <span
        onClick={() => {
          update("useFontWidth");
        }}
        className={`py-checkbox ${useFontWidth ? "checked" : ""} ${
          wordType === 0 ? "" : "hide"
        }`}
        dangerouslySetInnerHTML={{ __html: checked }}
      />
      <div
        className={`font-width-area ${wordType === 0 ? "" : "hide"}`}
        style={{ width: 40 }}
      >
        <Input onChange={changeFontWidth} type="number" value={fontWidth} />
      </div>
    </>
  );
};

let _getSelectList = (
  pyFontFamilys,
  wordFontFamilys,
  pyFontSizes,
  wordFontSizes,
  wordColors,
  pyColors
) => {
  // 2代表拼音，1代表汉字
  const pyFamilyList = getFontFamilyList(2, pyFontFamilys);
  const pyFontSizeList = getFontSiezList(2, pyFontSizes);
  const pyfontColorList = getFontColorList(2, pyColors);
  const wordFamilyList = getFontFamilyList(1, wordFontFamilys);
  const wordfontSizeList = getFontSiezList(1, wordFontSizes);
  const wordfontColorList = getFontColorList(1, wordColors);

  return function (type) {
    const selectListObj = {
      [PinYinFont.PYFont]: pyFamilyList,
      [PinYinFont.PYSize]: pyFontSizeList,
      [PinYinFont.PYColor]: pyfontColorList,
      [WordFont.WFont]: wordFamilyList,
      [WordFont.WColor]: wordfontColorList,
      [WordFont.WSize]: wordfontSizeList,
    };
    return selectListObj[type];
  };
};

// 没有传入从外界传入的值
let getSelectList = _getSelectList();

export default Panel;
