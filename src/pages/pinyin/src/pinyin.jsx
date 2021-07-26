/** eslint-disable */
import React, { useEffect, useState } from "react";
import { decorationSvgs } from "./utils/svg_constants.jsx";
import "./index.scss";

import TopOptions from "./components/topOptions";
import WordOptions from "./components/wordOptions";
import PinyinOptions from "./components/pinyinOptions";
import Content from "./components/content/content";
import Panel1 from "./components/panel1";
import Panel2 from "./components/panel2";

export default function Generate(props) {
  const [config, setConfig] = useState({
    data: [],
    options: {
      wordType: 0, // 上下,左右,组合，四线三格，田字格等
      pinyinType: 0, // 1 - 标准，2 - 首字母大写，3 - 大写
      wordStyle: {
        show: true,
        fontSize: 10,
        fontFamily: "思源",
        color: "black",
      }, // 字体、大小、字色、显示汉字
      pinyinStyle: {
        show: true,
        fontSize: 10,
        fontFamily: "国标",
        color: "black",
      }, // 字体、大小、字色、标注声调、显示拼音，u是否去点
      showWord: true,
      showPinyin: true,
      markTone: true,
      uKeepPoint: true,
    },
  });

  const [defaultConfig, setDefaultConfig] = useState({});

  useEffect(() => {
    setConfig(props.config);
    setDefaultConfig(JSON.parse(JSON.stringify(props.config)));
    console.log(props.config);
  }, []);

  const updateOperate4Top = (key, value) => {
    config.options[key] = value;
    setConfig({
      ...config,
      options: {
        ...config.options,
        [key]: value
      }
    });
  };

  const reset = () => {
    setConfig(defaultConfig);
  }

  return (
    <div className="py-mask">
      <div className="py-border">
        <div className="py-title">学科工具拼音</div>
        <div className="py-top-bar-main">
          <div className="py-other-basic-control">
            <TopOptions config={config} updateOperate={updateOperate4Top} />
            <div className="py-reset-btn py-line-item-btn" onClick={reset}>
              <span>{decorationSvgs.reset}</span>
              <span>重置</span>
            </div>
          </div>
          <div className="py-basic-control">
            <div>
              <WordOptions config={config} updateOperate={updateOperate4Top}/>
            </div>
            <div>
              <PinyinOptions config={config} updateOperate={updateOperate4Top}/>
            </div>
          </div>
        </div>
        <div className="py-edit-content">
          <Content config={config} />
        </div>
        <div className="py-footer">
          <div className="py-panel">
            <div>
              <Panel1 config={config} />
            </div>
            <div>
              <Panel2 config={config} />
            </div>
          </div>
          <div>
            <button className="py-cancel-btn">取消</button>
            <button className="py-ok-btn">确认</button>
          </div>
        </div>
      </div>
    </div>
  );
}
