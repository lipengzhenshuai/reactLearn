import { decorationSvgs } from "../utils/svg_constants.ts";

const pinyinOptions = ({ config }) => {
  const { pinyinType } = config.options;
  const { form_font, first_upper_font, all_upper_font } = decorationSvgs;

	return (
		<>
		<div id="${IDs.FORM}" data-value="0" className="py-list-item ${pinyinType === 0 ? 'active': ''}">
			<span className="py-low2"  dangerouslySetInnerHTML={{ __html: form_font }}></span>
			<span>标准样式</span>
		</div>
		<div id="${IDs.FIRSTUP}" data-value="1" className="py-list-item ${pinyinType === 1 ? 'active': ''}">
			<span className="py-low2" dangerouslySetInnerHTML={{ __html: first_upper_font }}></span>
			<span>首字大写</span>
		</div>
		<div id="${IDs.ALLUP}" data-value="2" className="py-list-item ${pinyinType === 2 ? 'active': ''} last">
			<span className="py-low2" dangerouslySetInnerHTML={{ __html: all_upper_font }}></span>
			<span>全大写</span>
		</div>
		</>
	)
};

export default pinyinOptions;
