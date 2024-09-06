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

/**
 * 第一个是隐藏的组件，看到的第一个其实是第二个
*/

let container = undefined;

export const updateFocus2 = (index) => {
	(container || (container = document.getElementById("EDITCONTENT"))).querySelectorAll("input")[index].focus();
}