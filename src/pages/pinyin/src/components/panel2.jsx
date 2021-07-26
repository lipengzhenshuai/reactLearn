import React from "react";
import { decorationSvgs } from "../utils/svg_constants.jsx";

function Panel2(props) {
  const {
    options: {
      wordStyle: { fontFamily, fontSize, color },
      fontWidth,
      wordType,
    },
  } = props.config;
  const { nabla, font } = decorationSvgs;

  return (
    <>
      <div>汉字样式</div>
      <div className="py-opt py-borders">
        <span className="choice" style={{ width: "50px" }}>
          <span></span>
        </span>
        <span className="py-down">{nabla}</span>
        <div className="fontFamilyPanel style-select hide">
          {/* {getSelectList(IDs.WORDFONTSTYLE)} */}
        </div>
      </div>
      <div className="py-opt py-borders">
        <span className="choice">
          <span>{fontSize}</span>
        </span>
        <span className="py-down">{nabla}</span>
        <div className="fontSizePanel style-select hide">
          {/* {getSelectList(IDs.WORDFONTSIZE)} */}
        </div>
      </div>
      <div className="opt">
        <span className="choice">
          {font}
          <span className="box" style={{ background: { color } }}></span>
        </span>
        <span className="py-down">{nabla}</span>
        <div className="fontColorPanel style-select hide">
          {/* {getSelectList(IDs.WORDFONTCOLOR)} */}
        </div>
      </div>
      {wordType === 0 && (
        <>
          <div style={{ margin: "0 8px" }}>字宽</div>
          <div className="font-width-area" style={{ width: "40px" }}>
            <input type="number" value={fontWidth} />
          </div>
        </>
      )}
    </>
  );
}

export default Panel2;
