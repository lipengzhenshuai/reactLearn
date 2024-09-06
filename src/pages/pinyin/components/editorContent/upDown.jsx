import { FONTSIZEDEFAULT } from "../../utils/data.ts";
import { decorationSvgs } from "../../utils/svg_constants";
import { firstUp } from "../../utils/utils.ts";
import { PinYinType } from "../../utils/constants.ts";
import { useSelector } from "react-redux";
import { removeTone } from '../../utils/noTone.ts';
import { getUpELement } from '../../utils/dom.ts';
import { useState } from "react";

const wrapper = (str, options) => {
  const { pinyinType: type, markTone } = options;
  if (type === PinYinType.FIRSTUP) {
    str = firstUp(str);
  } else if (type === PinYinType.ALLUP) {
    str = str.toUpperCase();
  }
  return markTone ? str : removeTone(str);
};

function RenderUpDown({ data, index, isPreview = false, onCompositionStart, onInput, onKeyDown, onCompositionend, onPaste, dispatch, closeOther }) {

  const config = useSelector((state) => state);
  const options = config.options;

  const [showPys, setShowPys] = useState(false);

  const {
    wordStyle,
    pinyinStyle,
    showWord,
    showPinyin,
    fontWidth,
    useFontWidth,
    pinyinType,
  } = options;

  const { pysData } = data;
  const polyphone = pysData.length > 0;
  // 是否展示多选的箭头
  const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
  const showInput = !isPreview;
  let pinyinFontSize = pinyinStyle.fontSize;
  let wordFontSize = wordStyle.fontSize;
  if (wordFontSize === FONTSIZEDEFAULT || pinyinFontSize === FONTSIZEDEFAULT) {
    wordFontSize = useFontWidth ? `${(1 / fontWidth).toFixed(2)}em` : "1em";
    pinyinFontSize = useFontWidth ? `${(1 / fontWidth).toFixed(2)}em` : "1em";
  } else {
    wordFontSize += "pt";
    pinyinFontSize += "pt";
  }

  const switchDuoYin = (e, pysData, index) => {
    e.stopPropagation(); // 阻止事件冒泡
    closeOther();
    const { target } = e;
    if ([0, 4].includes(config.options.wordType)) {
      // 3.是否点击的是 上下的 多选拼音
      const pysEle = getUpELement(target, "pys-chooser", "py-edit-content");
      if(pysEle) {
        if(showPys) {
          setShowPys(false);
        } else {
          closeOther(setShowPys)
          setShowPys(true);
        }
        return;
      }
      // // TODO: 对点击文字的处理
      // const pinyinEle = getUpELement(target, "py-wrap", "py-edit-content");
      // if (pinyinEle) {
      //   return;
      // }
    } else {
      // 3.5是否点击的是 左右的 多选拼音和icon
      const pysEle = getUpELement(target, "pys-chooser", "py-edit-content");
      if(pysEle) {
        // generatepolyphonePop4UPDown(e, config, index);
        return;
      }
      // TODO: 点击竖板文字权限
      const pinyinEle = getUpELement(target, "py-wrap", "py-edit-content");
      if (pinyinEle) {
        return;
      }
    }
  };

  const updatePys = (e, value, index) => {
    dispatch({type: 'updatePys', index, value} )
    setShowPys(false);
    e.stopPropagation(); // 阻止事件冒泡
  }

  return (
    <>
      <span className="py-item">
        <span className="py-pinyin" style={{ fontSize: pinyinFontSize }}>
          <span
            className={`py-wrap ${showPinyin ? "" : " hide-remain"}`}
            style={{
              color: pinyinStyle.color,
              fontFamily: pinyinStyle.fontFamily,
            }}
          >
            {wrapper(data.pinyin, options)}
          </span>
          {isPreview ? (
            ""
          ) : (
            <div
              className={`pys-chooser ${showSelectIcon ? "" : "hide"}`}
              onClick={(e) => switchDuoYin(e, pysData, index)}
            >
              <span
                className="py-down"
                dangerouslySetInnerHTML={{ __html: decorationSvgs.pys_tips }}
              />
              <span className="py-masks pysChooser">
              <div class="popOut_pys pysChooser">
                {
                  pysData && pysData.map(item => <div style={{display: showPys? "block" : "none" }} class="pys" onClick={(e) => updatePys(e, item, index)}>{wrapper(item, options)}</div>)
                }
              </div>
              </span>
            </div>
          )}
        </span>
        <span className="py-word" style={{ fontSize: wordFontSize }}>
          <span
            style={{
              color: wordStyle.color,
              "font-family": wordStyle.fontFamily,
            }}
          >
            <span className={showWord || data.type !== 1 ? "" : "hide-remain"}>
              {data.word}
            </span>
            {isPreview ? (
              ""
            ) : (
              <input
                type="text"
                onCompositionStart={onCompositionStart}
                onInput={e => onInput(e, index + 1)}
                onCompositionEnd={e => {onCompositionend(e, index + 1)}}
                onKeyDown={e => onKeyDown(e, index + 1)}
                onPaste={e => {onPaste(e, index + 1)}}
                className={`py-word-input ${showInput ? "" : "hide"}`}
                autocomplete="off"
                style={{ fontSize: "1em" }}
              />
            )}
          </span>
        </span>
      </span>
    </>
  );
}

export default RenderUpDown;
