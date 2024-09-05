import { FONTSIZEDEFAULT } from "../../utils/data.ts";
import { decorationSvgs } from "../../utils/svg_constants";
import { firstUp } from "../../utils/utils.ts";
import { PinYinType } from "../../utils/constants.ts";
import { getPinYin, getSymbol, getMixin } from "../../utils/generate.ts";
import { updateData } from "./temp.js";
import { useSelector, useDispatch } from "react-redux";

const typeFunc = {
  1: getPinYin,
  2: getSymbol,
  3: getMixin,
};

const wrapper = (str, options) => {
  const { pinyinType: type, markTone } = options;
  if (type === PinYinType.FIRSTUP) {
    str = firstUp(str);
  } else if (type === PinYinType.ALLUP) {
    str = str.toUpperCase();
  }
  return str;
  // return markTone ? str : removeTone(str);
};

function RenderUpDown({ data, index, options, isPreview = false }) {
  const {
    wordStyle,
    pinyinStyle,
    showWord,
    showPinyin,
    fontWidth,
    useFontWidth,
    pinyinType,
  } = options;

  const config = useSelector((state) => state);
  const dispatch = useDispatch();

  function addValue(e, value, type) {
    const { target } = e;
    // 2.将汉字转化成对应的数据格式
    let pinyin = typeFunc[type](value);
    // 3.更新数据
    updateData(target, pinyin, config, dispatch);
    // 4.更新dom
    // updateChild(target, pinyin);
    // 5.清空默认值
    // e.target.value = '';
    // 6.激活对应位置的光标
    // updateFocus(target, pinyin.length);
  }

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

  const onCompositionend = (e) => {
    console.log("lipeng-🚀- ~ onCompositionend ~ e:", e);
    // isComposing = false;
    const { target, data } = e;
    const { tagName = "" } = target;
    if (tagName !== "INPUT") {
      return;
    }

    // 默认在输入法下只可以输入汉字或者只可以输入拼音
    // 1.如果输入的是普通的字符
    const symbol = data.replace(/[\u4E00-\u9FA5]/g, "");
    if (symbol) {
      addValue(e, symbol, 2);
      return;
    }
    // 2.输入的内容是汉字
    const hanZi = data.replace(/[^\u4E00-\u9FA5]/g, "");
    if (hanZi) {
      addValue(e, hanZi, 1);
      return;
    }
    e.target.value = "";
  };

  const onPaste = (e) => {
    let data = (e.clipboardData || window.clipboardData).getData("text");
    e.preventDefault();
    if (data) {
      addValue(e, data, 3, config, dispatch);
      return;
    }
    e.target.value = "";
  };

  return (
    <>
      <span className="py-item">
        <span className="py-pinyin" style={{ "font-size": pinyinFontSize }}>
          <span
            contenteditable="true"
            className={`py-wrap ${showPinyin ? "" : " hide-remain"}`}
            style={{
              color: pinyinStyle.color,
              "font-family": pinyinStyle.fontFamily,
            }}
          >
            {wrapper(data.pinyin, options)}
          </span>
          {isPreview ? (
            ""
          ) : (
            <div
              // 为何会有一个id？
              id="POLYPHONE"
              className={`pys-chooser ${showSelectIcon ? "" : "hide"}`}
            >
              <span
                className="py-down"
                dangerouslySetInnerHTML={{ __html: decorationSvgs.pys_tips }}
              />
              <span className="py-masks pysChooser"></span>
            </div>
          )}
        </span>
        <span className="py-word" style={{ "font-size": wordFontSize }}>
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
                onPaste={onPaste}
                onCompositionEnd={onCompositionend}
                className={`py-word-input ${showInput ? "" : "hide"}`}
                autocomplete="off"
                style={{ "font-size": "1em" }}
              />
            )}
          </span>
        </span>
      </span>
    </>
  );
}

export default RenderUpDown;
