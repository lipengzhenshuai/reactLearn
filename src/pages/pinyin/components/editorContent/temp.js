import { getPinYin, getSymbol, getMixin } from "../../utils/generate.ts";
import { getUpELement } from '../../utils/dom.ts';

const typeFunc = {
  1: getPinYin,
  2: getSymbol,
  3: getMixin,
};

export const getPinYinData = (type) => {
	return typeFunc[type]
}

export const updateData = ({pinyin, dispatch, index}) => {
	dispatch({type: 'updateData', index, value: pinyin})
}

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

export const updateFocus = (target, length) => {
	if ([...target.classList].indexOf("py-first-input") !== -1) { // 第一个input
		console.log('document.getElementById("EDITCONTENT").querySelectorAll("input")', document.getElementById("EDITCONTENT").querySelectorAll("input"))
		document.getElementById("EDITCONTENT").querySelectorAll("input")[length].focus();
	} else {
		let item = getUpELement(target, "py-item", "py-edit-content");
		while(length--) {
			item = item.nextElementSibling;
		}
		item.querySelector("input").focus();
	}
}