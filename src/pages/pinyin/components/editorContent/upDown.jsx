import { FONTSIZEDEFAULT } from "../../utils/data.ts";
import { decorationSvgs } from "../../utils/svg_constants";
import { firstUp } from "../../utils/utils.ts";
import { PinYinType } from "../../utils/constants.ts";
import { useSelector } from "react-redux";
import { removeTone } from '../../utils/noTone.ts';

const wrapper = (str, options) => {
  const { pinyinType: type, markTone } = options;
  if (type === PinYinType.FIRSTUP) {
    str = firstUp(str);
  } else if (type === PinYinType.ALLUP) {
    str = str.toUpperCase();
  }
  return markTone ? str : removeTone(str);
};

function RenderUpDown({ data, index, isPreview = false, onCompositionStart, onInput, onKeyDown, onCompositionend, onPaste }) {

  const config = useSelector((state) => state);
  const options = config.options;

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

  return (
    <>
      <span className="py-item">
        <span className="py-pinyin" style={{ "font-size": pinyinFontSize }}>
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
                onCompositionStart={onCompositionStart}
                onInput={e => onInput(e, index + 1)}
                onCompositionEnd={e => {onCompositionend(e, index + 1)}}
                onKeyDown={e => onKeyDown(e, index + 1)}
                onPaste={e => {onPaste(e, index + 1)}}
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
