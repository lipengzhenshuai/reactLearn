import React from "react";
import './1.less';

import { decorationSvgs } from "../utils/svg_constants";

import Top from './top.jsx';
import PinYinType from './pinyinTypeOptions.jsx';
import WordType from './wordTypeOptions.jsx';

const PinYinContent = ({ config, updateConfig }: any) => {

  // 清除数据
  const clear = () => {
    if (config.data.length > 0) { // 更新内容
      updateConfig({ ...config, data: [] });
    }
  }

  // 重置默认样式
  const reset = () => {
    updateConfig({ ...config, data: [] });
  }

  return (
    <div className="py-mask">
      <div className="py-border">
        <div className="py-title">学科工具拼音</div>
        <div className="py-top-bar-main">
          <div className="py-other-basic-control">
            <div><Top config={config} updateConfig={updateConfig} /></div>
            <div>
              <div onClick={clear} className="py-clear-btn py-line-item-btn">
                <span dangerouslySetInnerHTML={{ __html: decorationSvgs.clear }}></span>
                <span>清除</span>
              </div>
              <div onClick={reset} className="py-reset-btn py-line-item-btn">
                <span dangerouslySetInnerHTML={{ __html: decorationSvgs.reset }}></span>
                <span>重置</span>
              </div>
            </div>
          </div>
          <div className="py-basic-control">
            <div>
              <WordType config={config} updateConfig={updateConfig} />
            </div>
            <div>
              <PinYinType config={config} updateConfig={updateConfig} />
            </div>
          </div>
        </div>
        <div id="${IDs.EDITCONTENT}" className="py-edit-content">
          {/* ${editContainer(config)} */}
        </div>
        <div id="${IDs.ERRORMSG}">
        </div>
        <div className="py-footer">
          {/* <div id=${IDs.STYLEBASICCONTROL} className="py-panel">
            ${panel(config)}
          </div> */}
          <div>
            <button id="${IDs.CANCEL}" className="py-cancel-btn">取消</button>
            <button id="${IDs.SUBMIT}" className="py-ok-btn">确认</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinYinContent;