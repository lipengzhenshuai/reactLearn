import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './index.less';
import { decorationSvgs } from "../utils/svg_constants";
import Top from './top.jsx';
import PinYinType from './pinyinTypeOptions.jsx';
import WordType from './wordTypeOptions.jsx';
import Panel from './panel.jsx';
import EditContainer from './editorContent/index.jsx';

const PinYinContent = () => {

  const config: any = useSelector(state => state);
  const dispatch = useDispatch();
  
  // 清除数据
  const clear = () => {
    if (config.data.length > 0) { // 更新内容
      dispatch({type: 'clearData'})
    }
  }

  // 重置默认样式
  const reset = () => {
    dispatch({type: 'reset'})
  }

  // 取消
  const cancel = () => {

  }

  // 提交
  const submit = () => {

  }

  return (
    <div className="py-mask">
      <div className="py-border">
        <div className="py-title">学科工具拼音</div>
        <div className="py-top-bar-main">
          <div className="py-other-basic-control">
            <div><Top /></div>
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
              <WordType />
            </div>
            <div>
              <PinYinType />
            </div>
          </div>
        </div>
        <EditContainer isPreview={false} />
        <div>
        </div>
        <div className="py-footer">
          <div className="py-panel">
            <Panel />
          </div>
          <div>
            <button onClick={cancel} className="py-cancel-btn">取消</button>
            <button onClick={submit} className="py-ok-btn">确认</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinYinContent;