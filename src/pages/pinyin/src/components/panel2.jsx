import React from "react";
import { Select } from "antd";
const { Option } = Select;

function Panel2(props) {
  const {
    options: {
      wordStyle: { fontFamily, fontSize, color },
      fontWidth,
      wordType,
    },
  } = props.config;
  const { wordFontFamilys, wordFontSizes, wordColors } = props;

  return (
    <>
      <div>汉字样式</div>
      <Select defaultValue={fontFamily} style={{ width: 80 }}>
        {wordFontFamilys.map((item) => (
          <Option value={item.value}>{item.label}</Option>
        ))}
      </Select>
      <Select style={{ width: 80 }} defaultValue={fontSize}>
        {wordFontSizes.map((item) => (
          <Option value={item}>{item}</Option>
        ))}
      </Select>
      <Select style={{ width: 80 }} defaultValue={color}>
        {wordColors.map((item) => (
          <Option value={item.value}>{item.label}</Option>
        ))}
      </Select>
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
