import React from "react";
import ReactDOM from 'react-dom';
import { createContainer } from "./utils/dom.js";
import PinYin from "./pinyin";
import { containerId } from "./data";
import 'antd/dist/antd.css';


let isComposing = false;
let isPending = false;
const defaultConfig = {
	data: [
	],
	options: {
		wordType: 0, // 上下,左右,组合，四线三格，田字格等
		pinyinType: 0, // 1 - 标准，2 - 首字母大写，3 - 大写
		fontWidth: 30, // 文字相对宽度
		wordStyle: {
			show: true,
			fontSize: 10,
			fontFamily: "思源黑体SC-Regular",
			color: "black",
		}, // 字体、大小、字色、显示汉字
		pinyinStyle: {
			show: true,
			fontSize: 10,
			fontFamily: "GB Pinyinok-B",
			color: "black",
		}, // 字体、大小、字色、标注声调、显示拼音，u是否去点
		showWord: true,
		showPinyin: true,
		markTone: true,
		uKeepPoint: true,
	}
};
let config = {};
let _onSubmit = undefined;
let _defaultOptions = {};
let _pyFontFamilys = [];
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

let getSelectList = undefined;

export default function generate({ data = defaultConfig, onSubmit = () => { },
	pyFontFamilys,
	wordFontFamilys,
	pyFontSizes,
	wordFontSizes,
	wordColors,
	pyColors
}) {
	config = JSON.parse(JSON.stringify(data));
	_onSubmit = onSubmit;
	_defaultOptions = JSON.parse(JSON.stringify(config.options));
	_wordFontFamilys = wordFontFamilys;
	_pyFontFamilys = pyFontFamilys;
	// 0.创建容器
	createContainer();
	// TODO: 设置下拉框模板，使用antd下拉框实现
	// getSelectList = _getSelectList(pyFontFamilys, wordFontFamilys, pyFontSizes, wordFontSizes, wordColors, pyColors);
	// 1.初始化基本数据
	ReactDOM.render(
		<PinYin config={config}></PinYin>,
		document.querySelector(`#${containerId}`)
	);
	// 2.监听事件
	// addEventAgent();
}

// const addEventAgent = () => {
// 	// 顶部
// 	document.getElementById(IDs.OTHERBASICCONTROL).addEventListener("click",(e) => { otherBasicControl(e) },false);

// 	// 基础内容
// 	document.getElementById(IDs.BASICCONTROL).addEventListener("click",(e) => {updateBasicControl(e);},false);

// 	// 输入区域
// 	addEditContetEventAgent();

// 	// 样式控制
// 	document.getElementById(IDs.STYLEBASICCONTROL).addEventListener('click', stylePanelClickHandle, false);
// 	document.getElementById(IDs.STYLEBASICCONTROL).addEventListener('change', e => {
// 		let { value = 20 } = e.target;
// 		if(value > 100 || value < 20) {
// 			value = value > 100 ? 100 : 20;
// 			e.target.value = value;
// 		}

// 		// 更新data
// 		config.options.fontWidth = value;
// 		// 更新dom
// 		document.querySelector(".py-edit-content").innerHTML = editContainer(config);
// 	}, false);

// 	// 取消，确认
// 	document.getElementById(IDs.CANCEL).addEventListener("click",() => {
// 		removeContainer();
// 	},false);
// 	document.getElementById(IDs.SUBMIT).addEventListener("click", submitHandler,false);

// };

// const addEditContetEventAgent = () => {

// 	const editContent = document.body.querySelector(`#${IDs.EDITCONTENT}`);
// 	editContent.addEventListener("input",  (e) => {
// 		const { target, data = undefined, isComposing = true } = e;
// 		const { tagName = "" } = target;
// 		if (tagName !== "INPUT") {
// 			return;
// 		}
// 		if (data && !isComposing) {
// 			generateSymbol(e, data);
// 		}
// 	});

// 	const generateSymbol = (e, data) => {
// 		// 是否是一些基本符号
// 		const singal = "；：？…—·ˉˇ¨‘’々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝{}ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ≈≡≠＝" +
// 		" “”|~`@$^()_+——）（*&……%￥#@！-=，。、";
// 		if (singal.includes(data)) {
// 			if(data === "……" || data === "——") { // 对 …… 的特殊处理
// 				addValue(e,[{
// 					pinyin: "",
// 					pysData: [],
// 					type: 2,
// 					word: data
// 				}],2);
// 			} else {
// 				for(let item of data) {
// 					addValue(e,[{
// 						pinyin: "",
// 						pysData: [],
// 						type: 2,
// 						word: item
// 					}],2);
// 				}
// 			}
// 			return true;
// 		}

// 		setTimeout(() => {
// 			e.target.value = '';
// 		}, 100);
// 	}


// 	editContent.addEventListener("compositionstart", e => {
// 		isComposing = true;
// 	});

// 	editContent.addEventListener("compositionend", e => {
// 		isComposing = false;
// 		const { target, data } = e;
// 		const { tagName = "" } = target;
// 		if (tagName !== "INPUT") {
// 			return;
// 		}

// 		// 1.如果输入的是普通的字符
// 		const value = data.replace(/[^\u4E00-\u9FA5]/g,'');
// 		if (generateSymbol(e, data)) {
// 			return;
// 		}
// 		// 2.汉字输入结束
// 		if(!value) {
// 			e.target.value = '';
// 			return;
// 		}
// 		addValue(e, value, 1);
// 	})

// 	// 多音字处理
// 	editContent.addEventListener("click" , e => {
// 		const { target } = e;
// 		// 1.判断是否点击的是子节点，如果是就不处理
// 		const innerClickElement = getUpELement(target, "popOut_pys", "py-edit-content");
// 		if(innerClickElement) {
// 			polyphoneSelect(e, config);
// 			return;
// 		}
// 		// 2.如果有展开的节点，清空节点
// 		const editContent = document.body.querySelector("#EDITCONTENT");
// 		const children = editContent.children[0];
// 		const delItem = children.querySelector(".popOut_pys");
// 		delItem && children.removeChild(delItem);
// 		if(config.options.wordType === 0) {
// 			// 3.是否点击的是 上下的 多选拼音
// 			const item = getUpELement(target, "py-pinyin", "py-edit-content");
// 			if(item) {
// 				const index = getIndex(target);
// 				generatepolyphonePop(e, config.data, index, item);
// 				return;
// 			}
// 		} else {
// 			// 3.5是否点击的是 左右的 多选拼音和icon
// 			const pinyinEle = getUpELement(target, "py-pinyin-span", "py-edit-content");
// 			const pysEle = getUpELement(target, "pys-chooser", "py-edit-content");
// 			if(pinyinEle || pysEle) {
// 				const index = getIndex(target);
// 				generatepolyphonePop4UPDown(e, config.data, index);
// 				return;
// 			}
// 		}
// 		// 4.如果点击的是文字和拼音
// 		const word = getUpELement(target, "py-item", "py-edit-content");
// 		if(word) {
// 			word.querySelector("input").focus();
// 			return;
// 		}
// 		// 5.如果点击的是第一个input
// 		const input = getUpELement(target, "py-first-input", "py-edit-content");
// 		if(input) {
// 			input?.focus();
// 			return;
// 		}
// 		// 6.点击剩余区域
// 		const inputs = editContent?.querySelectorAll("input")
// 		inputs[inputs.length - 1].focus();
// 	}, false);

// 	editContent.addEventListener("keydown", (e) => {
// 		if(e.key === "Backspace" && !isComposing && e.target.id !== "input--1") {
// 			const item = getUpELement(e.target, "py-item", "py-edit-content");
// 			const prev = item.previousElementSibling;
// 			// 更新数据
// 			const index = getIndex(e.target);
// 			config.data.splice(index - 1, 1);
// 			otherDomUpdate(config);
// 			// 删除当前元素
// 			item.parentNode.removeChild(item);
// 			if(prev.tagName === "INPUT") {
// 				prev.focus();
// 				return;
// 			}
// 			let prevInput = prev.querySelector("input");
// 			prevInput && prevInput.focus();
// 		}

// 		if(e.key === "ArrowLeft" && !isComposing && e.target.id !== "input--1") {
// 			const item = getUpELement(e.target, "py-item", "py-edit-content");
// 			// 上一个获取焦点
// 			const prevEle =  item.previousElementSibling;
// 			if( prevEle.tagName === "INPUT") {
// 				prevEle?.focus();
// 				return;
// 			}
// 			prevEle?.querySelector("input")?.focus();
// 		}

// 		if(e.key === "ArrowRight" && !isComposing) {

// 			if(e.target.id === "input--1") {
// 				e.target?.nextElementSibling?.querySelector("input")?.focus();
// 				return;
// 			}
// 			const item = getUpELement(e.target, "py-item", "py-edit-content");
// 			// 下一个获取焦点
// 			item.nextElementSibling?.querySelector("input")?.focus();
// 		}
// 	}, false);
// }


// const otherBasicControl = (e) => {

// 	const { target } = e;
// 	const item = getUpELement(target, "py-line-item-btn", "py-other-basic-control");
// 	if(!item) {
// 		return;
// 	}
// 	const { id } = item;
// 	if(id === IDs.RESET) {
// 		(() => {
// 			config.options = JSON.parse(JSON.stringify(_defaultOptions));
// 			// 更新顶部样式
// 			document.getElementById(IDs.OTHERBASICCONTROL).children[0].innerHTML = topOptions(config);
// 			// 更新拼音样式
// 			document.getElementById(IDs.BASICCONTROL).children[0].innerHTML = wordOptions(config);
// 			// 更新字体样式
// 			document.getElementById(IDs.STYLEBASICCONTROL).innerHTML = `
// 				<div>${panel1(config)}</div>
// 				<div>${panel2(config)}</div>
// 			`;
// 			// 更新内容
// 			document.querySelector(".py-edit-content").innerHTML = editContainer(config);
// 		 })();
// 		 return;
// 	}
// 	clickHandler(id);
// }

// const clearSelected = (list) => {
// 	list.forEach((id) => {
// 		document.querySelector("#" + id).classList.remove("active");
// 	});
// };

// function updateBasicControl(e) {
// 	const node = getNode(e);
// 	const id = node.id;
// 	const value = node.getAttribute('data-value');
// 	const domId = document.querySelector("#" + id);
// 	if (
// 		id !== IDs.BASICCONTROL && !domId.classList.contains("active") && !domId.classList.contains("disable")
// 	) {
// 		const list = [
// 			IDs.UPDOWN,
// 			IDs.LEFTRIGHT,
// 			IDs.FOURLINE,
// 			IDs.SQUARE,
// 			IDs.COMBINE,
// 		];
// 		const list2 = [IDs.FORM, IDs.FIRSTUP, IDs.ALLUP];
// 		if (list.includes(id)) {
// 			config.options.wordType = +value;
// 			clearSelected(list);
// 		} else {
// 			config.options.pinyinType = +value;
// 			clearSelected(list2);
// 		}
// 		document.querySelector("#" + id).classList.add("active");
// 		if (list.includes(id)) {
// 			document.getElementById(IDs.STYLEBASICCONTROL).innerHTML = `
// 			<div>${panel1(config)}</div>
// 			<div>${panel2(config)}</div>
// 			`;
// 		}
// 	}

// 	document.querySelector(".py-edit-content").innerHTML = editContainer(config);

// }

// function addValue(e, value, type) {
// 	const { target } = e;
// 	// 2.将汉字转化成对应的数据格式
// 	let pinyin = type === 1 ? getPinYin(value) : value;
// 	// 3.更新数据
// 	updateData(target, pinyin);
// 	// 4.更新dom
// 	updateChild(target, pinyin);
// 	// 5.清空默认值
// 	e.target.value = '';
// 	// 6.激活对应位置的光标
// 	updateFocus(target, pinyin.length);
// }

// const updateData = (target, pinyin) => {
// 	if ([...target.classList].includes("py-first-input")) { // 第一个input
// 		config.data.splice(0,0, ...pinyin);
// 	} else {
// 		const index = getIndex(target);
// 		config.data.splice(index, 0, ...pinyin);
// 	}
// 	otherDomUpdate(config);
// }

// const updateChild = (target, pinyin) => {

// 	const newElement = addContainer({
// 		data:pinyin,
// 		options: config.options
// 	});
// 	if(target.id === "input--1") {
// 		// 根据不同的布局类型增加不同的页面结构
// 		insertAfter(newElement, target);
// 	} else {
// 		const item = getUpELement(target, "py-item", "py-edit-content");
// 		insertAfter(newElement, item);
// 	}
// }

// const updateFocus = (target, length) => {
// 	if ([...target.classList].indexOf("py-first-input") !== -1) { // 第一个input
// 		document.getElementById("EDITCONTENT").querySelectorAll("input")[length].focus();
// 	} else {
// 		let item = getUpELement(target, "py-item", "py-edit-content");
// 		while(length--) {
// 			item = item.nextElementSibling;
// 		}
// 		item.querySelector("input").focus();
// 	}
// }

// const getIndex = (target) => {
// 	const editContent = document.body.querySelector(`#${IDs.EDITCONTENT}`);
// 	const children = editContent.children[0].children;
// 	const item = getUpELement(target, "py-item", "py-edit-content");
// 	let index = -1;
// 	for(let i = 0; i < children.length; i++) {
// 		if(children[i] === item) {
// 			index = i;
// 			break;
// 		}
// 	}
// 	return index;
// }

// // 面板点击事件
// const stylePanelClickHandle = (e) => {
// 	e.stopPropagation()
// 	const node = getUpELement(e.target, "li", "py-panel");
// 	if(!node) {
// 		return;
// 	}
// 	// 1.获取被点击的元素的innerHtml
// 	const name = node.getAttribute('data-name');
// 	// 获取父节点，根据对应id获取type，然后根据对应type更新对应值，更新页面dom，更新content的dom
// 	const typeNode = getUpELement(e.target, "py-opt", "py-panel");
// 	if(!typeNode) {
// 		return;
// 	}
// 	const { pinyinStyle, wordStyle } = config.options;
// 	switch (typeNode.id) {
// 		case IDs.PINYINFONTSTYLE:
// 			pinyinStyle.fontFamily = name;
// 			break;
// 		case IDs.PINYINFONTSIZE:
// 			pinyinStyle.fontSize = +name;
// 			break;
// 		case IDs.PINYINFONTCOLOR:
// 			pinyinStyle.color = name;
// 			break;
// 		case IDs.WORDFONTSTYLE:
// 			wordStyle.fontFamily = name;
// 			break;
// 		case IDs.WORDFONTSIZE:
// 			wordStyle.fontSize = +name;
// 			break;
// 		case IDs.WORDFONTCOLOR:
// 			wordStyle.color = name;
// 			break;
// 		default:
// 			break;
// 	}
// 	// 更新拼音样式
// 	document.getElementById(IDs.STYLEBASICCONTROL).innerHTML = `
// 		<div>${panel1(config)}</div>
// 		<div>${panel2(config)}</div>
// 	`;
// 	// 更新拼音
// 	document.querySelector(".py-edit-content").innerHTML = editContainer(config);
// }

// const submitHandler = () => {
// 	isPending = true;
// 	const { data } = config;
// 	if (data.length) {
// 		if( _onSubmit && typeof _onSubmit === 'function') {
// 			const res = _onSubmit({
// 				data: config,
// 				html: generatePreview(config),
// 			})
// 			if(isPromise(res)) {
// 				res.then(res => {
// 					res !== false && removeContainer();
// 				})
// 				.finally(() => {
// 					isPending = false;
// 				});
// 			} else {
// 				console.log("参数异常");
// 				isPending = false;
// 			}
// 		} else {
// 			console.log("参数异常");
// 			isPending = false;
// 		}
// 	} else {
// 		document.getElementById(IDs.ERRORMSG).innerHTML ="<span class='error-msg'>老师，请输入内容</span>";
// 		isPending = false;
// 	}
// };