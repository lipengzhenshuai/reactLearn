import React from "react";

import Content from './components/content';

const PinYin = (props: any) => {
  const defaultConfig = {
    data: [],
    options: {
      wordType: 0, // 上下,左右,四线三格，田字格，组合等
      pinyinType: 0, // 1 - 标准，2 - 首字母大写，3 - 大写
      fontWidth: 2, // 文字相对宽度
      useFontWidth: false, // 是否使用字体宽度
      wordStyle: {
        show: true,
        fontSize: "默认",
        fontFamily: "inherit",
        color: "inherit",
      }, // 字体、大小、字色、显示汉字
      pinyinStyle: {
        show: true,
        fontSize: "默认",
        fontFamily: "inherit",
        color: "inherit",
      }, // 字体、大小、字色、标注声调、显示拼音，u是否去点
      showWord: true,
      showPinyin: true,
      markTone: true,
      uKeepPoint: true,
    },
  };
  return <Content config={defaultConfig} />;
};

export default PinYin;
