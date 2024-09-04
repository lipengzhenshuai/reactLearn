function renderLeftRight(data, options, isPreview = false) {

	const {
		wordStyle,
		pinyinStyle,
		showWord,
		showPinyin,
		pinyinType
	} = options;

	const { pysData } = data;
	const polyphone = pysData.length > 0;
	const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
	const showInput = !isPreview;

	let wordFontSize = wordStyle.fontSize;
	let pinyinFontSize = pinyinStyle.fontSize;
	if (wordFontSize === FONTSIZEDEFAULT || pinyinFontSize === FONTSIZEDEFAULT) {
		wordFontSize = '1em';
		pinyinFontSize = '1em';
	} else {
		wordFontSize += 'pt';
		pinyinFontSize += 'pt';
	}

	return `
		<span class="py-item">
			<span class="py-word" style="font-size:${wordFontSize};">
				${
					isPreview ? '' : `
					<input
						class="py-word-input ${showInput ? "" : 'hide'}"
						
						type="text">`
				}
				<span
					class="py-word-span${(showWord || data.type !== 1) ? "" : ' hide'}" 
					style="color:${wordStyle.color};font-family:${wordStyle.fontFamily}"
				>
					${data.word}
				</span>
				<span
					class="py-pinyin-span${(showPinyin && data.type === 1) ? "" : ' hide'}"
					style="color:${pinyinStyle.color};font-size:${pinyinFontSize};"
				>
					<span class="${showWord ? "" : 'hide'}">(</span>
					<span class="py-wrap" style="font-family:${pinyinStyle.fontFamily}"  contenteditable="true">${wrapper(data.pinyin, options)}</span>
					<span class="${showWord ? "" : 'hide'}">)</span>
				</span>
				${
					isPreview ? '' : `
					<div id="POLYPHONE" class="pys-chooser ${ showSelectIcon ? "" : "hide" }">
						<span class="py-down">${decorationSvgs.pys_tips}</span>
						<span class="py-masks pysChooser"></span>
					</div>`
				}
			</span>
		</span>`;
}
