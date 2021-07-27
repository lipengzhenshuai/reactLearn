import React from "react";
import { Select } from "antd";
const { Option } = Select;

function Panel1(props) {
  const {
    options: {
      pinyinStyle: { fontFamily, fontSize, color },
    },
  } = props.config;
  const { pyFontFamilys, pyFontSizes, pyColors } = props;

  return (
    <>
      <div>拼音样式</div>
      <Select defaultValue={fontFamily} style={{ width: 80 }}>
        {pyFontFamilys.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
      <Select style={{ width: 80 }} defaultValue={fontSize}>
        {pyFontSizes.map((item) => (
          <Option key={item.value} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <Select style={{ width: 80 }} defaultValue={color}>
        {pyColors.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </>
  );
}

export default Panel1;
