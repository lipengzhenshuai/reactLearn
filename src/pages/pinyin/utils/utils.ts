// @ts-nocheck
import { pyFontFamilys, wordFontFamilys, pyFontSizes, wordFontSizes, wordColors, pyColors } from "./data";
export const getNode = (e: any) => {
	let node = e.target;
	while (!node.id) {
		node = node.parentNode;
	}
	return node;
};

/**
 * 
 * @param type {1:汉字 2:拼音}
 * @returns 
 */

export const getFontFamilyList = (type = 1, config:any) => {
	const select = config || (type === 1 ? wordFontFamilys : pyFontFamilys);
	return select;
};

/**
 * 
 * @param type {1:汉字 2:拼音}
 * @returns 
 */

export const getFontSiezList = (type = 1, config:any) => {
	const list = config || (type === 1 ? wordFontSizes : pyFontSizes);
	return list;
};


/**
 * 
 * @param type {1:汉字 2:拼音}
 * @returns 
 */

export const getFontColorList = (type = 1, config) => {

	const select = config || (type === 1 ? wordColors : pyColors);
	return select;
}

export const getWordNameByValue = (value, list) => {
	list = (list || wordFontFamilys).filter(item => (item.value === value || item.label === value) );
	return (list.length > 0 || '') && list[0].label;
}

export const getWordNameByValue4PY = (value, list) => {
	list = (list || pyFontFamilys).filter(item => (item.value === value || item.label === value) );
	return (list.length > 0 || '') && list[0].label;
}

export const isPromise = func => {
	return func && typeof func.then === 'function' && typeof func.catch === 'function';
}

export const firstUp = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
