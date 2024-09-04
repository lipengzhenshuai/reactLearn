import React, { useEffect, useRef } from "react";
import { FONTSIZEDEFAULT } from "../../utils/data.ts";
// import { isComposing } from '../../index.jsx';
// import { addValue } from "./temp.js";
import UpDown from "./upDown";

let isComposing = false;

const renderList = {
  0: UpDown,
  // 1: renderLeftRight,
  // 2: renderLine,
  // 3: renderSquare,
  // 4: renderCombine
};

const EditContainer = ({ config, isPreview = false }) => {
  const { data, options } = config;

  const editContent = useRef(null);

  useEffect(() => {

    editContent.current.addEventListener("input",  (e) => {
      const { target, data = undefined, isComposing = true } = e;
      const { tagName = "" } = target;
      if (tagName === "SPAN") {
        // const { innerText } = e.target;
        // const index = getIndex(target);
        // config.data[index - 1].pinyin = innerText;
      } else if (tagName === "INPUT" && data && !isComposing) {
        // addValue(e, data, 2, config);
      }
    });
  
    editContent.current.addEventListener("compositionstart", e => {
      isComposing = true;
    });
    
    editContent.current.addEventListener("compositionend", e => {
      isComposing = false;
      const { target, data } = e;
      const { tagName = "" } = target;
      if (tagName !== "INPUT") {
        return;
      }
  
      // 默认在输入法下只可以输入汉字或者只可以输入拼音
      // 1.如果输入的是普通的字符
      const symbol = data.replace(/[\u4E00-\u9FA5]/g, '');
      if (symbol) {
        // addValue(e, symbol, 2);
        return;
      }
      // 2.输入的内容是汉字
      const hanZi = data.replace(/[^\u4E00-\u9FA5]/g, '');
      if(hanZi) {
        // addValue(e, hanZi, 1);
        return;
      }
      e.target.value = '';
    })
  
    editContent.current.addEventListener("paste",  (e) => {
      // 遍历然后动态生成数据，然后更改dom
      let data = (e.clipboardData || window.clipboardData).getData('text');
      e.preventDefault();
      if(data) {
        // addValue(e, data, 3);
        return;
      }
      e.target.value = '';
    });
  
    // 多音字处理
    editContent.current.addEventListener("click" , e => {
      const { target } = e;
      // 1.判断是否点击的是子节点，如果是就不处理
      // const innerClickElement = getUpELement(target, "popOut_pys", "py-edit-content");
      // if(innerClickElement) {
      //   polyphoneSelect(e, config);
      //   return;
      // }
      // // 2.如果有展开的节点，清空节点
      // const editContent = document.body.querySelector("#EDITCONTENT");
      // const children = editContent.children[0];
      // const delItem = children.querySelector(".popOut_pys");
      // delItem && children.removeChild(delItem);
      // if ([0, 4].includes(config.options.wordType)) {
      //   // 3.是否点击的是 上下的 多选拼音
      //   const pysEle = getUpELement(target, "pys-chooser", "py-edit-content");
      //   if(pysEle) {
      //     const index = getIndex(target);
      //     generatepolyphonePop(config, index, pysEle);
      //     return;
      //   }
      //   // TODO: 对点击文字的处理
      //   const pinyinEle = getUpELement(target, "py-wrap", "py-edit-content");
      //   if (pinyinEle) {
      //     return;
      //   }
      // } else {
      //   // 3.5是否点击的是 左右的 多选拼音和icon
      //   const pysEle = getUpELement(target, "pys-chooser", "py-edit-content");
      //   if(pysEle) {
      //     const index = getIndex(target);
      //     generatepolyphonePop4UPDown(e, config, index);
      //     return;
      //   }
      //   // TODO: 点击竖板文字权限
      //   const pinyinEle = getUpELement(target, "py-wrap", "py-edit-content");
      //   if (pinyinEle) {
      //     return;
      //   }
      // }
      // // 4.如果点击的是文字和拼音
      // const word = getUpELement(target, "py-item", "py-edit-content");
      // if(word) {
      //   word.querySelector("input").focus();
      //   return;
      // }
      // // 5.如果点击的是第一个input
      // const input = getUpELement(target, "py-first-input", "py-edit-content");
      // if(input) {
      //   input.focus();
      //   return;
      // }
      // // 6.点击剩余区域
      // const inputs = editContent.querySelectorAll("input")
      // inputs[inputs.length - 1].focus();
    }, false);
  
    editContent.current.addEventListener("keydown", (e) => {
      const { key = "", target: { id, tagName } } = e;
      // if (tagName === "INPUT" && !isComposing) {
      //   if (key === "Backspace" && id !== "input--1") {
      //     const item = getUpELement(e.target, "py-item", "py-edit-content");
      //     const prev = item.previousElementSibling;
      //     // 更新数据
      //     const index = getIndex(e.target);
      //     config.data.splice(index - 1, 1);
      //     otherDomUpdate(config);
      //     // 删除当前元素
      //     item.parentNode.removeChild(item);
      //     if(prev.tagName === "INPUT") {
      //       prev.focus();
      //       return;
      //     }
      //     let prevInput = prev.querySelector("input");
      //     prevInput && prevInput.focus();
      //   } else if (key === "ArrowLeft") {
      //     const item = getUpELement(e.target, "py-item", "py-edit-content");
      //     // 上一个获取焦点
      //     const prevEle =  item.previousElementSibling;
      //     if(prevEle && prevEle.tagName === "INPUT") {
      //       prevEle.focus();
      //       return;
      //     }
      //     prevEle.querySelector("input").focus();
      //   } else if (key === "ArrowRight") {
      //     if(id === "input--1") {
      //       e.target.nextElementSibling.querySelector("input").focus();
      //       return;
      //     }
      //     const item = getUpELement(e.target, "py-item", "py-edit-content");
      //     // 下一个获取焦点
      //     item.nextElementSibling.querySelector("input").focus();
      //   }
      // }
    }, false);
  }, [])

  const {
    wordType,
    wordStyle: { fontSize: wordFontSize },
    pinyinStyle: { fontSize: pinyinFontSize },
    fontWidth,
    useFontWidth,
  } = options;
  const renderFunc = renderList[wordType];

  let width = undefined;
  let _wordFontSize = undefined;
  if (wordType === 0) {
    // 如果使用的是跟随文本的模式
    if (
      wordFontSize === FONTSIZEDEFAULT ||
      pinyinFontSize === FONTSIZEDEFAULT
    ) {
      width = useFontWidth ? fontWidth + "em" : "1em";
      _wordFontSize = useFontWidth ? `${(1 / fontWidth).toFixed(2)}em` : "1em";
    } else {
      if (useFontWidth) {
        width = Math.max(options.fontWidth, 20) + "pt";
      } else {
        width = getWidth(wordFontSize, pinyinFontSize) + "pt";
      }
      _wordFontSize = wordFontSize + "pt";
    }
  } else {
    if (
      wordFontSize === FONTSIZEDEFAULT ||
      pinyinFontSize === FONTSIZEDEFAULT
    ) {
      _wordFontSize = "1em";
    } else {
      _wordFontSize = wordFontSize + "pt";
    }
  }

  const map = new Map();

  return (
    <div ref={editContent}>
      <span
        className={`${
          useFontWidth ? "py-equal-width " : "py-not-equal-width "
        } py-item-wrap-0 py-item-wrapper`}
        style={{ "font-size": width }}
      >
        {isPreview ? (
          ""
        ) : (
          <input
            style={{
              "margin-top": data.length ? "0.5em" : 0,
              width: data.length ? "10px" : "8em",
              "font-size": _wordFontSize,
            }}
            type="text"
            id="input--1"
            data-index="-1"
            placeholder={`${data.length ? "" : "请输入文字~"}`}
            autocomplete="off"
            className="py-first-input"
          />
        )}
        {data.map((item) => renderFunc(item, options, isPreview).trim())}
      </span>
    </div>
  );

  // map.set(
  //   1,
  //   `<span class="py-item-wrap-1 py-item-wrapper" style="font-size: ${_wordFontSize}">
  // ${
  //   isPreview
  //     ? ""
  //     : `
  // 	<input style="width:${
  //     data.length ? "10pt" : "8em"
  //   }" type="text" id="input--1" data-index="-1" placeholder="${
  //         data.length ? "" : "请输入文字~"
  //       }" autocomplete="off" class="py-first-input">
  // `
  // }
  // ${item}</span>`
  // );

  // map.set(
  //   2,
  //   `<span class="py-item-wrap-2 py-item-wrapper" style="font-size: ${
  //     pinyinFontSize + "px"
  //   }">
  // ${
  //   isPreview
  //     ? ""
  //     : `
  // 	<input style="width:${
  //     data.length ? "10pt" : "8em"
  //   }" type="text" id="input--1" data-index="-1" placeholder="${
  //         data.length ? "" : "请输入文字~"
  //       }" autocomplete="off" class="py-first-input">
  // `
  // }
  // ${item}</span>`
  // );

  // map.set(
  //   3,
  //   `<span class="py-item-wrap-3 py-item-wrapper" style="font-size: ${_wordFontSize}">
  // ${
  //   isPreview
  //     ? ""
  //     : `
  // 	<input style="width:${
  //     data.length ? "10pt" : "8em"
  //   }" type="text" id="input--1" data-index="-1" placeholder="${
  //         data.length ? "" : "请输入文字~"
  //       }" autocomplete="off" class="py-first-input">
  // `
  // }
  // ${item}</span>`
  // );

  // map.set(
  //   4,
  //   `<span class="py-item-wrap-4 py-item-wrapper" style="font-size: ${_wordFontSize}">
  // ${
  //   isPreview
  //     ? ""
  //     : `
  // 	<input
  // 	style="margin-top:${data.length ? "0.5em" : 0};
  // 	width:${data.length ? "10px" : "8em"};
  // 	font-size:${_wordFontSize}"
  // 		type="text" id="input--1" data-index="-1" placeholder="${
  //       data.length ? "" : "请输入文字~"
  //     }" autocomplete="off" class="py-first-input"
  // 	>`
  // }
  // ${item}</span>`
  // );

  let template = map.get(wordType);

  //  TODO: 预览删除冗余代码，减少体积
  // if (isPreview) {
  //   template = template
  //     .trim()
  //     .replace(/\s{2,}/g, " ")
  //     .replace(/>\s+/g, ">")
  //     .replace(/\s+</g, "<")
  //     .replace(/class="py-item"/g, "")
  //     .replace(/(color|font-family):inherit;?/g, "")
  //     .replace(/(class|style)="\s{0,}"/g, "");
  //   template = template.replace(/contenteditable="true"/g, "");
  // }
  return template;
};

const getWidth = (wordFontSize, pinyinFontSize) => {
  const renewMinWidth = 10;
  return Math.max(wordFontSize, pinyinFontSize, renewMinWidth);
};


export default EditContainer;
