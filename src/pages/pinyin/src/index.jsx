/** eslint-disable */
import React, { useEffect } from "react";
// import "./utils/pinyinUtil/pinyin_dict_withtone.js";
// import "./utils/pinyinUtil/pinyinUtil.js";
import { decorationSvgs } from "./utils/svg_constants";
import "./index.less";
import {
  editContainer,
  addContainer,
  generatepolyphonePop,
  polyphoneSelect,
  generatePreview,
} from "./content.js";
import {
  getNode,
  getFontSiezList,
  getFontFamilyList,
  getFontColorList,
  isPromise,
  getWordNameByValue,
} from "./utils/utils";
import { getPinYin } from "./utils/generate";
import {
  createContainer,
  insertAfter,
  getUpELement,
  removeContainer,
  otherDomUpdate,
} from "./utils/dom.js";

import { containerId } from "./data";

let isComposing = false;
let isPending = false;
const defaultConfig = {
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
};
let config = {};
let _onSubmit = undefined;
let _defaultOptions = {};
let _wordFontFamilys = [];

const IDs = {
  OTHERBASICCONTROL: "OTHERBASICCONTROL",
  SHOWWORD: "SHOWWORD",
  SHOWPINYIN: "SHOWPINYIN",
  MARKTONE: "MARKTONE",
  UKEEPPOINT: "UKEEPPOINT",

  RESET: "RESET",

  BASICCONTROL: "BASICCONTROL",
  UPDOWN: "UPDOWN",
  LEFTRIGHT: "LEFTRIGHT",
  FOURLINE: "FOURLINE",
  SQUARE: "SQUARE",
  COMBINE: "COMBINE",

  FORM: "FORM",
  FIRSTUP: "FIRSTUP",
  ALLUP: "ALLUP",

  EDITCONTENT: "EDITCONTENT",

  STYLEBASICCONTROL: "STYLEBASICCONTROL",
  PINYINFONTSTYLE: "PINYINFONTSTYLE",
  PINYINFONTSIZE: "PINYINFONTSIZE",
  PINYINFONTCOLOR: "PINYINFONTCOLOR",

  ERRORMSG: "ERRORMSG",

  WORDFONTSTYLE: "WORDFONTSTYLE",
  WORDFONTSIZE: "WORDFONTSIZE",
  WORDFONTCOLOR: "WORDFONTCOLOR",

  BLACKFONT: "BLACKFONT",
  REDFONT: "REDFONT",

  BLACKPINYIN: "BLACKPINYIN",
  REDPINYIN: "REDPINYIN",

  CANCEL: "CANCEL",
  SUBMIT: "SUBMIT",
};

export default function Generate() {
  useEffect(() => {
    const data = defaultConfig;
    const onSubmit = () => {};
    const pyFontFamilys = [];
    const wordFontFamilys = [];
    const pyFontSizes = [];
    const wordFontSizes = [];
    const wordColors = [];
    const pyColors = [];

    config = JSON.parse(JSON.stringify(data));
    _onSubmit = onSubmit;
    _defaultOptions = JSON.parse(JSON.stringify(config.options));
    _wordFontFamilys = wordFontFamilys;
    // 0.创建容器
    createContainer();
    // 设置下拉框模板
    getSelectList = getSelectList(
      pyFontFamilys,
      wordFontFamilys,
      pyFontSizes,
      wordFontSizes,
      wordColors,
      pyColors
    );
    // 1.初始化基本数据
    document.querySelector(`#${containerId}`).innerHTML = `
	<div class="py-mask">
		<div class="py-border">
			<div class="py-title">学科工具拼音</div>
			<div class="py-top-bar-main">
				<div id="${IDs.OTHERBASICCONTROL}" class="py-other-basic-control">
					<div>${topOptions(config)}</div>
					<div id="${IDs.RESET}" class="py-reset-btn py-line-item-btn">
						<span>${decorationSvgs.reset}</span>
						<span>重置</span>
					</div>
				</div>
				<div id="${IDs.BASICCONTROL}" class="py-basic-control">
					<div>
						${wordOptions(config)}
					</div>
					<div>
						${pinyinOptions(config)}
					</div>
				</div>
			</div>
			<div id="${IDs.EDITCONTENT}" class="py-edit-content">
				${editContainer(config)}
			</div>
			<div id="${IDs.ERRORMSG}">
			</div>
			<div class="py-footer">
				<div id=${IDs.STYLEBASICCONTROL} class="panel">
					<div>
						${panel1(config)}
					</div>
					<div>
						${panel2(config)}
					</div>
				</div>
				<div>
					<button id="${IDs.CANCEL}" class="cancel-btn">取消</button>
					<button id="${IDs.SUBMIT}" class="ok-btn">确认</button>
				</div>
			</div>
		</div>
	</div>
    `;
    // 2.监听事件
    addEventAgent();
  }, []);

  return <div></div>;
}

const topOptions = (config) => {
  const { showWord, showPinyin } = config.options;
  const checkedSvgs = decorationSvgs.checked;

  return `
	<div id=${IDs.SHOWWORD} class="py-line-item py-line-item-btn">
		<span class='py-checkbox ${showWord ? "checked" : ""}'>${checkedSvgs}</span>
		<span class='py-tab'>显示汉字</span>
	</div>
    <div id=${IDs.SHOWPINYIN} class="py-line-item py-line-item-btn">
		<span class='py-checkbox ${showPinyin ? "checked" : ""} '>${checkedSvgs}</span>
		<span class='py-tab'>显示拼音</span>
	</div>`;
};

const wordOptions = (config) => {
  const { wordType } = config.options;
  const { up_down, left_right, four_line, square, combine } = decorationSvgs;
  return `
	<div id="${IDs.UPDOWN}" data-value="0" class="py-list-item ${
    wordType === 0 ? "active" : ""
  }">
		<span class="py-low1">${up_down}</span>
		<span>拼音上下</span>
	</div>
	<div id="${IDs.LEFTRIGHT}" data-value="1" class="py-list-item  ${
    wordType === 1 ? "active" : ""
  }">
		<span class="py-low1">${left_right}</span>
		<span>拼音左右</span>
	</div>
	<div id="${IDs.FOURLINE}" data-value="2" class="py-list-item disable  ${
    wordType === 2 ? "active" : ""
  }">
		<span class="py-low2">${four_line}</span>
		<span>四线三格</span>
	</div>
	<div id="${IDs.SQUARE}" data-value="3" class="py-list-item disable  ${
    wordType === 3 ? "active" : ""
  }">
		<span class="py-low2">${square}</span>
		<span>田字格</span>
	</div>
	<div id="${IDs.COMBINE}" data-value="4" class="py-list-item disable  ${
    wordType === 4 ? "active" : ""
  }">
		<span>${combine}</span>
		<span>组合形式</span>
	</div>`;
};

const pinyinOptions = (config) => {
  const { pinyinType } = config.options;
  const { form_font, first_upper_font, all_upper_font } = decorationSvgs;

  return `
	<div id="${IDs.FORM}" data-value="0" class="py-list-item ${
    pinyinType === 0 ? "active" : ""
  }">
		<span class="py-low2">${form_font}</span>
		<span>标准样式</span>
	</div>
	<div id="${IDs.FIRSTUP}" data-value="1" class="py-list-item ${
    pinyinType === 1 ? "active" : ""
  } disable">
		<span class="py-low2">${first_upper_font}</span>
		<span>首字大写</span>
	</div>
	<div id="${IDs.ALLUP}" data-value="2" class="py-list-item ${
    pinyinType === 2 ? "active" : ""
  } disable last">
		<span class="py-low2">${all_upper_font}</span>
		<span>全大写</span>
	</div>`;
};

const panel1 = (config) => {
  const {
    options: {
      pinyinStyle: { fontFamily, fontSize, color },
    },
  } = config;
  const { nabla, font } = decorationSvgs;

  return `
	<div>拼音样式</div>
	<div id=${IDs.PINYINFONTSTYLE} class='opt border'>
		<span class='choice' style="width:50px">
			<span>${fontFamily}</span>
		</span>
		<span class='py-down'>${nabla}</span>
		<div class ='pinyinFamilyPanel style-select hide'>${getSelectList(
      IDs.PINYINFONTSTYLE
    )}</div>
	</div>
	<div id=${IDs.PINYINFONTSIZE} class='opt border'>
		<span class='choice'>
			<span>${fontSize}</span>
		</span>
		<span class='py-down'>${nabla}</span>
		<div class ='pinyinSizePanel style-select hide'>${getSelectList(
      IDs.PINYINFONTSIZE
    )}</div>
	</div>
	<div id=${IDs.PINYINFONTCOLOR} class='opt'>
		<span class='choice'>
			${font}
			<span class='box' style="background: ${color};"></span>
		</span>
		<span class='py-down'>${nabla}</span>
		<div class ='pinyinColorPanel style-select hide'>
			${getSelectList(IDs.PINYINFONTCOLOR)}
		</div>
	</div>
	`;
};

const panel2 = (config) => {
  const {
    options: {
      wordStyle: { fontFamily, fontSize, color },
    },
  } = config;
  const { nabla, font } = decorationSvgs;

  return `
	<div>汉字样式</div>
	<div id=${IDs.WORDFONTSTYLE} class='opt border'>
		<span class='choice' style="width:50px">
			<span>${getWordNameByValue(fontFamily, _wordFontFamilys)}</span>
		</span>
		<span class='py-down'>${nabla}</span>
		<div class ='fontFamilyPanel style-select hide'>${getSelectList(
      IDs.WORDFONTSTYLE
    )}</div>
	</div>
	<div id=${IDs.WORDFONTSIZE} class='opt border'>
		<span class='choice'>
			<span>${fontSize}</span>
		</span>
		<span class='py-down'>${nabla}</span>
		<div class ='fontSizePanel style-select hide'>${getSelectList(
      IDs.WORDFONTSIZE
    )}</div>
	</div>
	<div id=${IDs.WORDFONTCOLOR} class='opt'>
		<span class='choice'>
			${font}
			<span class='box' style="background: ${color};"></span>
		</span>
		<span class='py-down'>${nabla}</span>
		<div class ='fontColorPanel style-select hide'>
			${getSelectList(IDs.WORDFONTCOLOR)}
		</div>
	</div>`;
};

let getSelectList = (
  pyFontFamilys,
  wordFontFamilys,
  pyFontSizes,
  wordFontSizes,
  wordColors,
  pyColors
) => {
  const pyFamilyList = getFontFamilyList(2, pyFontFamilys);
  const pyFontSizeList = getFontSiezList(2, pyFontSizes);
  const pyfontColorList = getFontColorList(2, pyColors);
  const wordFamilyList = getFontFamilyList(1, wordFontFamilys);
  const wordfontSizeList = getFontSiezList(1, wordFontSizes);
  const wordfontColorList = getFontColorList(1, wordColors);

  return function (type) {
    const selectListObj = {
      [IDs.PINYINFONTSTYLE]: pyFamilyList,
      [IDs.PINYINFONTCOLOR]: pyfontColorList,
      [IDs.PINYINFONTSIZE]: pyFontSizeList,
      [IDs.WORDFONTSTYLE]: wordFamilyList,
      [IDs.WORDFONTSIZE]: wordfontSizeList,
      [IDs.WORDFONTCOLOR]: wordfontColorList,
    };
    return `<ul>${selectListObj[type]}</ul>`;
  };
};

const addEventAgent = () => {
  // 顶部
  document.getElementById(IDs.OTHERBASICCONTROL).addEventListener(
    "click",
    (e) => {
      otherBasicControl(e);
    },
    false
  );

  // 基础内容
  document.getElementById(IDs.BASICCONTROL).addEventListener(
    "click",
    (e) => {
      updateBasicControl(e);
    },
    false
  );

  // 输入区域
  const editContent = document.body.querySelector(`#${IDs.EDITCONTENT}`);
  editContent.addEventListener("input", (e) => {
    const { target, data = undefined, isComposing = true } = e;
    const { tagName = "" } = target;
    if (tagName !== "INPUT") {
      return;
    }
    if (data && !isComposing) {
      // 是否是一些基本符号
      const singal =
        " " +
        "。，、；：？！…—·ˉˇ¨‘’々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ≈≡≠＝";
      if (singal.includes(data)) {
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
      }

      setTimeout(() => {
        e.target.value = "";
      }, 100);
    }
  });

  editContent.addEventListener("compositionstart", (e) => {
    isComposing = true;
  });

  editContent.addEventListener("compositionend", (e) => {
    isComposing = false;
    const { target, data } = e;
    const { tagName = "" } = target;
    if (tagName !== "INPUT") {
      return;
    }
    // 1.汉字输入结束
    const value = data.replace(/[^\u4E00-\u9FA5]/g, "");
    if (!value) {
      e.target.value = "";
      return;
    }
    addValue(e, value, 1);
  });

  // 多音字处理
  editContent.addEventListener(
    "click",
    (e) => {
      // 1.判断是否点击的是子节点，如果是就不处理
      const innerClickElement = getUpELement(
        e.target,
        "popOut_pys",
        "py-edit-content"
      );
      if (innerClickElement) {
        polyphoneSelect(e, config);
        return;
      }
      // 2.如果有展开的节点，清空节点
      const editContent = document.body.querySelector("#EDITCONTENT");
      const children = editContent.children[0];
      const delItem = children.querySelector(".popOut_pys");
      delItem && children.removeChild(delItem);
      // 3.是否点击的是多选拼音
      const item = getUpELement(e.target, "pys-chooser", "py-edit-content");
      if (item) {
        const index = getIndex(e.target);
        generatepolyphonePop(e, config.data, index);
        return;
      }
      // 4.如果点击的是文字和拼音
      const word = getUpELement(e.target, "py-item", "py-edit-content");
      if (word) {
        word.querySelector("input").focus();
        return;
      }
      // 5.如果点击的是文字和拼音
      const input = getUpELement(e.target, "py-first-input", "py-edit-content");
      if (input) {
        input.focus();
        return;
      }
      // 6.点击剩余区域
      const inputs = editContent.querySelectorAll("input");
      inputs[inputs.length - 1].focus();
    },
    false
  );

  editContent.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Backspace" && !isComposing && e.target.id !== "input--1") {
        const item = getUpELement(e.target, "py-item", "py-edit-content");
        const prev = item.previousElementSibling;
        // 更新数据
        const index = getIndex(e.target);
        config.data.splice(index - 1, 1);
        otherDomUpdate(config);
        // 删除当前元素
        item.parentNode.removeChild(item);
        if (prev.tagName === "INPUT") {
          prev.focus();
          return;
        }
        let prevInput = prev.querySelector("input");
        prevInput && prevInput.focus();
      }

      if (e.key === "ArrowLeft" && !isComposing && e.target.id !== "input--1") {
        const item = getUpELement(e.target, "py-item", "py-edit-content");
        // 上一个获取焦点
        const prevEle = item.previousElementSibling;
        if (prevEle.tagName === "INPUT") {
          prevEle.focus();
          return;
        }
        prevEle.querySelector("input").focus();
      }

      if (e.key === "ArrowRight" && !isComposing) {
        if (e.target.id === "input--1") {
          e.target.nextElementSibling.querySelector("input").focus();
          return;
        }
        const item = getUpELement(e.target, "py-item", "py-edit-content");
        // 下一个获取焦点
        item.nextElementSibling.querySelector("input").focus();
      }
    },
    false
  );

  // 样式控制
  document
    .getElementById(IDs.STYLEBASICCONTROL)
    .addEventListener("click", stylePanelClickHandle, false);

  // 取消，确认
  document.getElementById(IDs.CANCEL).addEventListener(
    "click",
    () => {
      removeContainer();
    },
    false
  );
  document
    .getElementById(IDs.SUBMIT)
    .addEventListener("click", submitHandler, false);
};

const otherBasicControl = (e) => {
  const { target } = e;
  const item = getUpELement(
    target,
    "py-line-item-btn",
    "py-other-basic-control"
  );
  if (!item) {
    return;
  }
  const { id } = item;
  if (id === IDs.RESET) {
    (() => {
      config.options = JSON.parse(JSON.stringify(_defaultOptions));
      // 更新顶部样式
      document.getElementById(IDs.OTHERBASICCONTROL).children[0].innerHTML =
        topOptions(config);
      // 更新拼音样式
      document.getElementById(IDs.BASICCONTROL).children[0].innerHTML =
        wordOptions(config);
      // 更新字体样式
      document.getElementById(IDs.STYLEBASICCONTROL).innerHTML = `
				<div>${panel1(config)}</div>
				<div>${panel2(config)}</div>
			`;
      // 更新内容
      document.querySelector(".py-edit-content").innerHTML =
        editContainer(config);
    })();
    return;
  }
  clickHandler(id);
};

function clickHandler(id) {
  const { showWord, showPinyin } = config.options;
  switch (id) {
    case IDs.SHOWWORD:
      config.options.showWord = !showWord;
      break;
    case IDs.SHOWPINYIN:
      config.options.showPinyin = !showPinyin;
      break;
    case IDs.RESET:
      break;
  }

  document
    .querySelector("#" + id)
    .firstElementChild.classList.toggle("checked");
  document.querySelector(".py-edit-content").innerHTML = editContainer(config);
}

const clearSelected = (list) => {
  list.forEach((id) => {
    document.querySelector("#" + id).classList.remove("active");
  });
};

function updateBasicControl(e) {
  const node = getNode(e);
  const id = node.id;
  const value = node.getAttribute("data-value");
  const domId = document.querySelector("#" + id);
  if (
    id !== IDs.BASICCONTROL &&
    !domId.classList.contains("active") &&
    !domId.classList.contains("disable")
  ) {
    const list = [
      IDs.UPDOWN,
      IDs.LEFTRIGHT,
      IDs.FOURLINE,
      IDs.SQUARE,
      IDs.COMBINE,
    ];
    const list2 = [IDs.FORM, IDs.FIRSTUP, IDs.ALLUP];
    if (list.includes(id)) {
      config.options.wordType = +value;
      clearSelected(list);
    } else {
      config.options.pinyinType = +value;
      clearSelected(list2);
    }
    document.querySelector("#" + id).classList.add("active");
  }

  document.querySelector(".py-edit-content").innerHTML = editContainer(config);
}

function addValue(e, value, type) {
  const { target } = e;
  // 2.将汉字转化成对应的数据格式
  let pinyin = type === 1 ? getPinYin(value) : value;
  // 3.更新数据
  updateData(target, pinyin);
  // 4.更新dom
  updateChild(target, pinyin);
  // 5.清空默认值
  e.target.value = "";
  // 6.激活对应位置的光标
  updateFocus(target, pinyin.length);
}

const updateData = (target, pinyin) => {
  if ([...target.classList].includes("py-first-input")) {
    // 第一个input
    config.data.splice(0, 0, ...pinyin);
  } else {
    const index = getIndex(target);
    config.data.splice(index, 0, ...pinyin);
  }
  otherDomUpdate(config);
};

const updateChild = (target, pinyin) => {
  const newElement = addContainer({
    data: pinyin,
    options: config.options,
  });
  if (target.id === "input--1") {
    // 根据不同的布局类型增加不同的页面结构
    insertAfter(newElement, target);
  } else {
    const item = getUpELement(target, "py-item", "py-edit-content");
    insertAfter(newElement, item);
  }
};

const updateFocus = (target, length) => {
  if ([...target.classList].indexOf("py-first-input") !== -1) {
    // 第一个input
    document
      .getElementById("EDITCONTENT")
      .querySelectorAll("input")
      [length].focus();
  } else {
    let item = getUpELement(target, "py-item", "py-edit-content");
    while (length--) {
      item = item.nextElementSibling;
    }
    item.querySelector("input").focus();
  }
};

const getIndex = (target) => {
  const editContent = document.body.querySelector(`#${IDs.EDITCONTENT}`);
  const children = editContent.children[0].children;
  const item = getUpELement(target, "py-item", "py-edit-content");
  let index = -1;
  for (let i = 0; i < children.length; i++) {
    if (children[i] === item) {
      index = i;
      break;
    }
  }
  return index;
};

// 面板点击事件
const stylePanelClickHandle = (e) => {
  e.stopPropagation();
  const node = getUpELement(e.target, "li", "panel");
  if (!node) {
    return;
  }
  // 1.获取被点击的元素的innerHtml
  const name = node.getAttribute("data-name");
  // 获取父节点，根据对应id获取type，然后根据对应type更新对应值，更新页面dom，更新content的dom
  const typeNode = getUpELement(e.target, "opt", "panel");
  if (!typeNode) {
    return;
  }
  const { pinyinStyle, wordStyle } = config.options;
  switch (typeNode.id) {
    case IDs.PINYINFONTSTYLE:
      pinyinStyle.fontFamily = name;
      break;
    case IDs.PINYINFONTSIZE:
      pinyinStyle.fontSize = +name;
      break;
    case IDs.PINYINFONTCOLOR:
      pinyinStyle.color = name;
      break;
    case IDs.WORDFONTSTYLE:
      wordStyle.fontFamily = name;
      break;
    case IDs.WORDFONTSIZE:
      wordStyle.fontSize = +name;
      break;
    case IDs.WORDFONTCOLOR:
      wordStyle.color = name;
      break;
    default:
      break;
  }
  // 更新拼音样式
  document.getElementById(IDs.STYLEBASICCONTROL).innerHTML = `
		<div>${panel1(config)}</div>
		<div>${panel2(config)}</div>
	`;
  // 更新拼音
  document.querySelector(".py-edit-content").innerHTML = editContainer(config);
};

const submitHandler = () => {
  isPending = true;
  const { data } = config;
  if (data.length) {
    if (_onSubmit && typeof _onSubmit === "function") {
      const res = _onSubmit({
        data: config,
        html: generatePreview(config),
      });
      if (isPromise(res)) {
        res
          .then((res) => {
            res !== false && removeContainer();
          })
          .finally(() => {
            isPending = false;
          });
      } else {
        console.log("参数异常");
        isPending = false;
      }
    } else {
      console.log("参数异常");
      isPending = false;
    }
  } else {
    document.getElementById(IDs.ERRORMSG).innerHTML =
      "<span class='error-msg'>老师，请输入内容</span>";
    isPending = false;
  }
};
