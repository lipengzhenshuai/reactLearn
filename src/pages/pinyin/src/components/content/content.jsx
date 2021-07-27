import React, { useEffect } from "react";
import { parseDom, getUpELement } from "../../utils/dom";
import { decorationSvgs } from "../../utils/svg_constants";

const renderList = {
  0: RenderUpDown,
  1: RenderLeftRight,
};

export default function EditContainer(props) {
  const { data, options } = props.config;
  const {
    wordType,
    wordStyle: { fontSize: wordFontSize },
    pinyinStyle: { fontSize: pinyinFontSize },
  } = options;

  const addValue = () => {};

  const onInput = (e) => {
    const { target, data = undefined, isComposing = true } = e;
    const { tagName = "" } = target;
    if (tagName !== "INPUT") {
      return;
    }
    if (data && !isComposing) {
      generateSymbol(e, data);
    }
  };

  const generateSymbol = (e, data) => {
    // 是否是一些基本符号
    const singal =
      "；：？…—·ˉˇ¨‘’々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝{}ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ≈≡≠＝" +
      " “”|~`@$^()_+——）（*&……%￥#@！-=，。、";
    if (singal.includes(data)) {
      if (data === "……" || data === "——") {
        // 对 …… 的特殊处理
        addValue(
          e,
          [
            {
              pinyin: "",
              pysData: [],
              type: 2,
              word: data,
            },
          ],
          2
        );
      } else {
        for (let item of data) {
          addValue(
            e,
            [
              {
                pinyin: "",
                pysData: [],
                type: 2,
                word: item,
              },
            ],
            2
          );
        }
      }
      return true;
    }

    setTimeout(() => {
      e.target.value = "";
    }, 100);
  };

  useEffect(() => {}, []);

  return wordType === 0 ? (
    <div
      className="py-item-wrap-0 py-item-wrapper"
      style={{ fontSize: wordFontSize + "px" }}
    >
      <input
        style={{
          marginTop: (data.length ? pinyinFontSize * 2 - 3 : 0) + "px",
          width: data.length ? "10px" : "8em",
        }}
        type="text"
        id="input--1"
        data-index="-1"
        placeholder={data.length ? "" : "请输入文字~"}
        autoComplete="off"
        className="py-first-input"
        onInput={onInput}
      />
      {data.map((item) => (
        <RenderUpDown
          options={props.config.options}
          data={item}
          isPreview={true}
        ></RenderUpDown>
      ))}
    </div>
  ) : (
    <div
      className="py-item-wrap-1 py-item-wrapper"
      style={{ fontSize: wordFontSize + "px" }}
    >
      <input
        style={{ width: data.length ? "10px" : "8em" }}
        type="text"
        id="input--1"
        data-index="-1"
        placeholder={data.length ? "" : "请输入文字~"}
        autoComplete="off"
        className="py-first-input"
      />
      {data.map((item) => (
        <RenderLeftRight
          config={props.config}
          options={props.config.options}
          data={item}
          isPreview={true}
        ></RenderLeftRight>
      ))}
    </div>
  );
}

export const addContainer = (config) => {
  const { data, options } = config;
  const { wordType } = options;
  let str = "";
  let renderFunc = renderList[wordType];
  for (let i = 0; i < data.length; i++) {
    str += renderFunc(data[i], i, options).trim();
  }
  return str;
};

export const generatePreview = (config) => {
  const { data, options } = config;

  const { wordType } = options;
  const renderFunc = renderList[wordType];
  let item = "";
  for (let i = 0; i < data.length; i++) {
    item += renderFunc(data[i], i, options, true)
      .trim()
      .replace(/>\s+/g, ">")
      .replace(/\s+</g, "<")
      .replace(/class="py-item"/g, "");
  }
  return (
    <div
      className="py-item-wrap-${wordType} py-item-wrapper"
      style={{ display: "inline" }}
    >
      ${item}
    </div>
  );
};

function RenderUpDown(props) {
  const { data, index, options, isPreview = false } = props;
  const { wordStyle, pinyinStyle, showWord, showPinyin, fontWidth } = options;

  const { pysData } = data;
  const polyphone = pysData.length > 0;
  // 是否展示多选的箭头
  const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
  const showInput = !isPreview;

  let width = getWidth(wordStyle.fontSize, pinyinStyle.fontSize, fontWidth);

  return (
    <div className="py-item" style={{ width: width }}>
      <div className="py-pinyin" style={{ fontSize: pinyinStyle.fontSize }}>
        <span
          className="py-wrap"
          style={{
            color: pinyinStyle.color,
            fontFamily: pinyinStyle.fontFamily,
          }}
        >
          {data.pinyin}
        </span>
        {isPreview ? (
          ""
        ) : (
          <div id="POLYPHONE" className="pys-chooser">
            <span className="py-down">${decorationSvgs.pys_tips}</span>
            <span className="py-masks pysChooser"></span>
          </div>
        )}
      </div>
      <div className="py-word" style={{ fontSize: wordStyle.fontSize }}>
        <span
          style={{
            color: wordStyle.color,
            fontSize: wordStyle.fontSize,
            fontFamily: wordStyle.fontFamily,
          }}
        >
          <span>{data.word}</span>
          {isPreview ? (
            ""
          ) : (
            <input
              type="text"
              className="py-word-input"
              autoComplete="off"
              style={{ fontSize: "1em" }}
            />
          )}
        </span>
      </div>
    </div>
  );
}

function RenderLeftRight(props) {
  const { data, index, options, isPreview = false } = props;
  const { wordStyle, pinyinStyle, showWord, showPinyin } = options;

  const { pysData } = data;
  const polyphone = pysData.length > 0;
  const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
  const showInput = !isPreview;
  return (
    <div className="py-item">
      <div className="py-word" style={{ fontSize: wordStyle.fontSize }}>
        {isPreview && <input className="py-word-input" type="text" />}
        <span
          className="py-word-span"
          style={{ color: wordStyle.color, fontFamily: wordStyle.fontFamily }}
        >
          {data.word}
        </span>
        <span
          className="py-pinyin-span"
          style={{ color: pinyinStyle.color, fontSize: pinyinStyle.fontSize }}
        >
          <i style={{ fontStyle: "normal" }} className="">
            (
          </i>
          <span
            className="py-wrap"
            style={{ fontFamily: pinyinStyle.fontFamily }}
          >
            {data.pinyin}
          </span>
          <i style={{fontStyle: "normal"}} className="">
            )
          </i>
        </span>
        {isPreview && (
          <div id="POLYPHONE" className="pys-chooser">
            <span className="py-down">{decorationSvgs.pys_tips}</span>
            <span className="py-masks pysChooser"></span>
          </div>
        )}
      </div>
    </div>
  );
}

const getWidth = (wordFontSize, pinyinFontSize, fontWidth) => {
  // const minWidth = 48;
  // const renewMinWidth = 36;
  return Math.max(fontWidth, 20);
  // return Math.max(Math.max(wordFontSize * 1.8, pinyinFontSize * 4, minWidth) - fontWidth, renewMinWidth);
};

export const generatepolyphonePop = (event, data, index, pinyinEle) => {
  data = data[index - 1];
  const editContent = document.body.querySelector("#EDITCONTENT");
  const children = editContent.children[0];
  let pop = polyphonePop(data.pysData, event, index, pinyinEle);
  pop && children.appendChild(parseDom(pop)[0]);
};

const polyphonePop = (pysData, event, index, pinyinEle) => {
  const container = document.body.querySelector(".py-border");
  let left = container?.offsetLeft;
  let top = container?.offsetTop;
  const target = pinyinEle.querySelector(".pys-chooser");
  if (!target) {
    return;
  }
  const { x, y } = target.getBoundingClientRect();
  return `<div class="popOut_pys pysChooser" data-index="${index}" style="left: ${
    x - left + 4
  }px; top: ${y - top}px;">
			${pysData.map((item) => `<div class="pys">${item}</div>`).join("")}
		</div>`;
};

export const generatepolyphonePop4UPDown = (event, data, index) => {
  data = data[index - 1];
  const editContent = document.body.querySelector("#EDITCONTENT");
  const children = editContent.children[0];
  let pop = polyphonePop4UPDown(data.pysData, event, index);
  pop && children.appendChild(parseDom(pop)[0]);
};

const polyphonePop4UPDown = (pysData, event, index) => {
  const container = document.body.querySelector(".py-border");
  let left = container?.offsetLeft;
  let top = container?.offsetTop;
  const target = getUpELement(
    event.target,
    "py-word",
    "py-edit-content"
  ).querySelector(".pys-chooser");
  if (!target) return;
  const { x, y } = target.getBoundingClientRect();
  return `<div class="popOut_pys pysChooser" data-index="${index}" style="left: ${
    x - left + 4
  }px; top: ${y - top}px;">
			${pysData.map((item) => `<div class="pys">${item}</div>`).join("")}
		</div>`;
};

export const polyphoneSelect = (e, config) => {
  const pinyin = e.target.innerHTML;
  const item = getUpELement(e.target, "popOut_pys", "py-edit-content");
  let index = +item.getAttribute("data-index");
  // 更新data
  config.data[index - 1].pinyin = pinyin;
  updateRender(index, pinyin);
};

const updateRender = (index, pinyin) => {
  let updateElement = null;
  const editContent = document.body.querySelector("#EDITCONTENT");
  // 修改dom
  let item = editContent.children[0].children;
  for (let i = 0; i < item.length; i++) {
    if (+index === i) {
      updateElement = item[i];
      break;
    }
  }
  updateElement.querySelector(".py-wrap").innerHTML = pinyin;
  // 删除弹框
  const children = editContent.children[0];
  const delItem = children.querySelector(".popOut_pys");
  delItem && children.removeChild(delItem);
};
