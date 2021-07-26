import React from "react";
import { parseDom, getUpELement } from "./utils/dom";
import { decorationSvgs } from "./utils/svg_constants";


const renderList = {
	0: renderUpDown,
	1: renderLeftRight
};

export const editContainer = (config) => {
	const {
		data,
		options,
	} = config;

	const {
		wordType,
		wordStyle: {fontSize: wordFontSize},
		pinyinStyle: {fontSize: pinyinFontSize}
	} = options;
	const renderFunc = renderList[wordType];
	let item = '';
	for (let i = 0; i < data.length; i++) {
		item += renderFunc(data[i], i, options).trim();
	}
	return (
		wordType === 0 ?
		<div className="py-item-wrap-0 py-item-wrapper" style={{fontSize: wordFontSize + "px"}}>
			<input
				style={{
					marginTop: (data.length ? (pinyinFontSize * 2 - 3) : 0)+ "px",
					width: data.length ? '10px' : '8em'
			  }}
				type="text" id="input--1" data-index="-1" placeholder={data.length ? '' : '请输入文字~'} autocomplete="off" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" class="py-first-input"
			/>${item}
		</div>
		:
		<div className="py-item-wrap-1 py-item-wrapper" style={{fontSize: wordFontSize+"px"}}>
			<input style={{width: data.length ? '10px' : '8em'}} type="text" id="input--1" data-index="-1" placeholder={data.length ? "" : "请输入文字~"} autocomplete="off" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" className="py-first-input" />
			${item}
		</div>
	);
};

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
	const {
		data,
		options,
	} = config;

	const {
		wordType,
	} = options;
	const renderFunc = renderList[wordType];
	let item = '';
	for (let i = 0; i < data.length; i++) {
		item += renderFunc(data[i], i, options, true).trim().replace(/>\s+/g, '>').replace(/\s+</g, '<').replace(/class="py-item"/g, '');
	}
	return (
		<div className="py-item-wrap-${wordType} py-item-wrapper" style={{display:"inline"}}>
			${item}
		</div>
	);
}

function renderUpDown(data, index, options, isPreview = false) {

	const {
		wordStyle,
		pinyinStyle,
		showWord,
		showPinyin,
		fontWidth
	} = options;

	const { pysData } = data;
	const polyphone = pysData.length > 0;
	// 是否展示多选的箭头
	const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
	const showInput = !isPreview;

	let width = getWidth(wordStyle.fontSize, pinyinStyle.fontSize, fontWidth);

	return `
		<div class="py-item" style="width:${width}px">
			<div class="py-pinyin" style="font-size:${pinyinStyle.fontSize}px;">
				<span
					class="py-wrap ${showPinyin ? "" : 'hide-remain'}"
					style="color:${pinyinStyle.color}; font-family:${pinyinStyle.fontFamily}"
					>
					${data.pinyin}
				</span>
				${
					isPreview ? '' : `
					<div id="POLYPHONE" class="pys-chooser ${ showSelectIcon ? "" : "hide"}">
						<span class="py-down">${decorationSvgs.pys_tips}</span>
						<span class="py-masks pysChooser"></span>
					</div>`
				}
			</div>
			<div class="py-word" style="font-size:${wordStyle.fontSize}px;">
					<span
						style="color:${wordStyle.color};font-size:${wordStyle.fontSize}px;font-family:${wordStyle.fontFamily}"
					>
						<span class="${(showWord || data.type !== 1)  ? "" : 'hide-remain'}" >${data.word}</span>
					${
						isPreview ? '' :
						`
						<input type="text"
							class="py-word-input ${showInput ? "" : 'hide'}"
							onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"
							autocomplete="off" style="font-size:1em">
						`
					}
					</span>
				</div>
		</div>`;
}

function renderLeftRight(data, index, options, isPreview = false) {

	const {
		wordStyle,
		pinyinStyle,
		showWord,
		showPinyin,
	} = options;

	const { pysData } = data;
	const polyphone = pysData.length > 0;
	const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
	const showInput = !isPreview;
	return `
		<div class="py-item">
			<div class="py-word" style="font-size:${wordStyle.fontSize}px;">
				${
					isPreview ? '' : `
					<input
						class="py-word-input ${showInput ? "" : 'hide'}"
						onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"
						type="text">`
				}
				<span
					class="py-word-span ${(showWord || data.type !== 1) ? "" : 'hide'}" 
					style="color:${wordStyle.color};font-family:${wordStyle.fontFamily}"
				>
					${data.word}
				</span>
				<span
					class="py-pinyin-span ${(showPinyin && data.type === 1) ? "" : 'hide'}"
					style="color:${pinyinStyle.color};font-size:${pinyinStyle.fontSize}px;"
				>
					<i style="font-style: normal;" class="${showWord ? "" : 'hide'}">(</i>
					<span data-pyindex="6"  id="py${index}" class="py-wrap" style="font-family:${pinyinStyle.fontFamily}">${data.pinyin}</span>
					<i style="font-style: normal;" class="${showWord ? "" : 'hide'}">)</i>
				</span>
				${
					isPreview ? '' : `
					<div id="POLYPHONE" class="pys-chooser ${ showSelectIcon ? "" : "hide" }">
						<span class="py-down">${decorationSvgs.pys_tips}</span>
						<span class="py-masks pysChooser"></span>
					</div>`
				}
			</div>
		</div>`;
}

const getWidth =  (wordFontSize, pinyinFontSize, fontWidth) => {
	// const minWidth = 48;
	// const renewMinWidth = 36;
	return Math.max(fontWidth, 20);
	// return Math.max(Math.max(wordFontSize * 1.8, pinyinFontSize * 4, minWidth) - fontWidth, renewMinWidth);
}

export const generatepolyphonePop = (event, data, index, pinyinEle) => {
	data = data[index - 1];
	const editContent = document.body.querySelector("#EDITCONTENT");
	const children = editContent.children[0];
	let pop = polyphonePop(data.pysData, event, index, pinyinEle);
	pop && children.appendChild(parseDom(pop)[0]);
}

const polyphonePop = (pysData, event, index, pinyinEle) => {
	const container = document.body.querySelector(".py-border");
	let left = container?.offsetLeft;
	let top = container?.offsetTop;
	const target = pinyinEle.querySelector(".pys-chooser");
	if(!target) {
		return;
	}
	const {x, y} = target.getBoundingClientRect();
	return`<div class="popOut_pys pysChooser" data-index="${index}" style="left: ${x - left + 4}px; top: ${y - top}px;">
			${pysData.map(item => `<div class="pys">${item}</div>`).join('')}
		</div>`;
}

export const generatepolyphonePop4UPDown = (event, data, index) => {
	data = data[index - 1];
	const editContent = document.body.querySelector("#EDITCONTENT");
	const children = editContent.children[0];
	let pop = polyphonePop4UPDown(data.pysData, event, index);
	pop && children.appendChild(parseDom(pop)[0]);
}

const polyphonePop4UPDown = (pysData, event, index) => {
	const container = document.body.querySelector(".py-border");
	let left = container?.offsetLeft;
	let top = container?.offsetTop;
	const target = getUpELement(event.target, "py-word", "py-edit-content").querySelector(".pys-chooser");
	if(!target) 
		return;
	const {x, y} = target.getBoundingClientRect();
	return`<div class="popOut_pys pysChooser" data-index="${index}" style="left: ${x - left + 4}px; top: ${y - top}px;">
			${pysData.map(item => `<div class="pys">${item}</div>`).join('')}
		</div>`;
}

export const polyphoneSelect = (e, config) => {
	const pinyin = e.target.innerHTML;
	const item = getUpELement(e.target, "popOut_pys", "py-edit-content");
	let index = +item.getAttribute("data-index");
	// 更新data
	config.data[index - 1].pinyin = pinyin;
	updateRender(index, pinyin);
}

const updateRender = (index, pinyin) => {
	let updateElement =null;
	const editContent = document.body.querySelector("#EDITCONTENT");
	// 修改dom
	let item = editContent.children[0].children;
	for(let i = 0; i< item.length; i++) {
		if(+index === i) {
			updateElement = item[i];
			break;
		}
	}
	updateElement.querySelector(".py-wrap").innerHTML = pinyin;
	// 删除弹框
	const children = editContent.children[0];
	const delItem = children.querySelector(".popOut_pys");
	delItem && children.removeChild(delItem);
}