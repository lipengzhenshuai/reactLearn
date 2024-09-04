import { getPinYin, getSymbol, getMixin } from "../../utils/generate.ts";

const typeFunc = {
	1: getPinYin,
	2: getSymbol,
	3: getMixin
}

export function addValue(e, value, type, config, updateConfig) {
	const { target } = e;
	// 2.将汉字转化成对应的数据格式
	let pinyin = typeFunc[type](value);
	// 3.更新数据
	// updateData(target, pinyin);
	// 4.更新dom
	// updateChild(target, pinyin);
	// 5.清空默认值
	// e.target.value = '';
	// 6.激活对应位置的光标
	// updateFocus(target, pinyin.length);
}

// const updateData = (target, pinyin) => {
//   // TODO: 其实可以不用区分
// 	if ([...target.classList].includes("py-first-input")) { // 第一个input
// 	} else {
// 		// const index = getIndex(target);
// 		// config.data.splice(index, 0, ...pinyin);
// 	}
//   // TODO: 更新
// 	// otherDomUpdate(config);
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