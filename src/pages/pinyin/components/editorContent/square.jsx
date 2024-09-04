function renderSquare(data, options, isPreview = false) {

	const {
		wordStyle,
		pinyinStyle,
		showWord,
	} = options;

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
					class="py-word-span ${(showWord || data.type !== 1) ? "" : 'hide'}" 
					style="color:${wordStyle.color};font-family:${wordStyle.fontFamily}"
				>
					${data.word}
				</span>
			</span>
		</span>`;
}
