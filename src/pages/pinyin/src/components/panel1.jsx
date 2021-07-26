import React from "react";
import { decorationSvgs } from "../utils/svg_constants.jsx";
import { Select } from 'antd';
const { Option } = Select;

function Panel1(props) {
  const {
    options: {
      pinyinStyle: { fontFamily, fontSize, color },
    },
  } = props.config;
  const { nabla, font } = decorationSvgs;
  

  return (
    <>
      <div>
      </div>
      <div>拼音样式</div>
      <Select style={{ width: 120 }}>
          <Option value="lucy">Lucy</Option>
        </Select>
      <div className="py-opt py-borders">
        <span className="py-choice" style={{ width: "50px" }}>
          <span>{fontFamily}</span>
        </span>
        <span className="py-down">{nabla}</span>
        <div className="pinyinFamilyPanel style-select hide">
          {/* {getSelectList(IDs.PINYINFONTSTYLE)} */}
        </div>
      </div>
      <div className="py-opt py-borders">
        <span className="choice">
          <span>{fontSize}</span>
        </span>
        <span className="py-down">{nabla}</span>
        <div className="pinyinSizePanel style-select hide">
          {/* {getSelectList(IDs.PINYINFONTSIZE)} */}
        </div>
      </div>
      <div className="opt">
        <span className="choice">
          {font}
          <span className="box" style={{ background: { color } }}></span>
        </span>
        <span className="py-down">{nabla}</span>
        <div className="pinyinColorPanel style-select hide">
          {/* {getSelectList(IDs.PINYINFONTCOLOR)} */}
        </div>
      </div>
    </>
  );
}

export default Panel1;
