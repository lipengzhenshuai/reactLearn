import React from "react";
import { decorationSvgs } from "../utils/svg_constants.ts";
import {
  getNode,
  getFontSiezList,
  getFontFamilyList,
  getFontColorList,
  isPromise,
  getWordNameByValue,
  getWordNameByValue4PY,
} from "../utils/utils.ts";

let getSelectList = undefined;

let _pyFontFamilys = [];
let _wordFontFamilys = [];

const Panel = ({ config }) => {
  const { wordType } = config.options;
  return (
    <>
      <div className={`${wordType === 3 ? "py-hide-remain" : ""}`}>
        {panel1(config)}
      </div>
      <div className={`${wordType === 2 ? "py-hide-remain" : ""}`}>
        {panel2(config)}
      </div>
    </>
  );
};

const panel1 = (config) => {
  const {
    options: {
      pinyinStyle: { fontFamily, fontSize, color },
    },
  } = config;
  const { nabla, font } = decorationSvgs;

  return (
    <>
      <div>拼音样式</div>
      <div className="py-opt py-borders">
        <span className="choice" style={{ width: "50" }}>
          <span>{getWordNameByValue4PY(fontFamily, _pyFontFamilys)}</span>
        </span>
        <span className="py-down" dangerouslySetInnerHTML={{ __html: nabla }} />
        <div className="pinyinFamilyPanel style-select hide">
          {/* ${getSelectList(IDs.PINYINFONTSTYLE)} */}
        </div>
      </div>
      <div className="py-opt py-borders">
        <span className="choice" style={{ width: "50" }}>
          <span>{fontSize}</span>
        </span>
        <span className="py-down" dangerouslySetInnerHTML={{ __html: nabla }} />
        <div className="pinyinSizePanel style-select hide">
          {/* ${getSelectList(IDs.PINYINFONTSIZE)} */}
        </div>
      </div>
      <div className="py-opt">
        <span className="choice">
          <span dangerouslySetInnerHTML={{ __html: font }} />
          <span className="box" style={{ background: "red" }}></span>
        </span>
        <span className="py-down" dangerouslySetInnerHTML={{ __html: nabla }} />
        <div className="pinyinColorPanel style-select hide">
          {/* ${getSelectList(IDs.PINYINFONTCOLOR)} */}
        </div>
      </div>
    </>
  );
};

const panel2 = (config) => {
  const {
    options: {
      wordStyle: { fontFamily, fontSize, color },
      fontWidth,
      useFontWidth,
      wordType,
    },
  } = config;
  const { nabla, font, checked } = decorationSvgs;

  return (
    <>
      <div>汉字样式</div>
      <div className="py-opt py-borders">
        <span className="choice" style={{ width: "50" }}>
          <span>{getWordNameByValue(fontFamily, _wordFontFamilys)}</span>
        </span>
        <span className="py-down" dangerouslySetInnerHTML={{ __html: nabla }} />
        <div className="fontFamilyPanel style-select hide">
          {/* ${getSelectList(IDs.WORDFONTSTYLE)} */}
        </div>
      </div>
      <div className="py-opt py-borders">
        <span className="choice" style={{ width: "50" }}>
          <span>{fontSize}</span>
        </span>
        <span className="py-down" dangerouslySetInnerHTML={{ __html: nabla }} />
        <div className="fontSizePanel style-select hide">
          {/* ${getSelectList(IDs.WORDFONTSIZE)} */}
        </div>
      </div>
      <div className="py-opt">
        <span className="choice">
          <span dangerouslySetInnerHTML={{ __html: font }} />
          <span className="box" style={{ background: "red" }}></span>
        </span>
        <span className="py-down" dangerouslySetInnerHTML={{ __html: nabla }} />
        <div className="fontColorPanel style-select hide">
          {/* ${getSelectList(IDs.WORDFONTCOLOR)} */}
        </div>
      </div>
      <div
        className={`${wordType === 0 ? "" : "hide"}`}
        style={{ margin: "0 8px" }}
      >
        字宽
      </div>
      <span
        className={`py-checkbox ${useFontWidth ? "checked" : ""} ${
          wordType === 0 ? "" : "hide"
        }`}
        dangerouslySetInnerHTML={{ __html: checked }}
      />
      <div
        className={`font-width-area ${wordType === 0 ? "" : "hide"}`}
        style={{ width: 40 }}
      >
        <input type="number" value="{fontWidth}" />
      </div>
    </>
  );
};

export default Panel;
