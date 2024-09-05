
export const updateData = (target, pinyin, config, dispatch) => {
  // TODO: 其实可以不用区分
	dispatch({type: 'updateData', index: 0, value: pinyin})
	// if ([...target.classList].includes("py-first-input")) { // 第一个input
	// } else {
	// 	// const index = getIndex(target);
	// 	// config.data.splice(index, 0, ...pinyin);
	// }
  // TODO: 更新
	// otherDomUpdate(config);
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