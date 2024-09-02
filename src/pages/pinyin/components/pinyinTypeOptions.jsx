import { decorationSvgs } from "../utils/svg_constants.ts";
import { PinYinType as PinYinTypeEnum } from "../utils/constants.ts";

const pinyinOptions = ({ config, updateConfig }) => {
  const { pinyinType } = config.options;
  const { form_font, first_upper_font, all_upper_font } = decorationSvgs;

  return (
    <>
      <div
        onClick={() => updateConfig("pinyinType", PinYinTypeEnum.FORM)}
        className={`py-list-item ${pinyinType === PinYinTypeEnum.FORM ? 'active': ''}`}
      >
        <span
          className="py-low2"
          dangerouslySetInnerHTML={{ __html: form_font }}
        ></span>
        <span>标准样式</span>
      </div>
      <div
        onClick={() => updateConfig("pinyinType", PinYinTypeEnum.FIRSTUP)}
        className={`py-list-item ${pinyinType === PinYinTypeEnum.FIRSTUP ? 'active': ''}`}
      >
        <span
          className="py-low2"
          dangerouslySetInnerHTML={{ __html: first_upper_font }}
        ></span>
        <span>首字大写</span>
      </div>
      <div
        onClick={() => updateConfig("pinyinType", PinYinTypeEnum.ALLUP)}
        className={`py-list-item ${pinyinType === PinYinTypeEnum.ALLUP ? 'active': ''}`}
      >
        <span
          className="py-low2"
          dangerouslySetInnerHTML={{ __html: all_upper_font }}
        ></span>
        <span>全大写</span>
      </div>
    </>
  );
};

export default pinyinOptions;
