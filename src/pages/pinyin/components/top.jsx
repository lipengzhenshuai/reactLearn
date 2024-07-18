import { decorationSvgs } from "../utils/svg_constants.ts";
const checkedSvgs = decorationSvgs.checked;

const Top = ({ config }) => {
  const { wordType } = config.options;
  return (
    <div>
      {showHanZi(wordType)}
      {showYinBiao(wordType)}
      {showYinDiao(wordType)}
    </div>
  );
};

const showHanZi = (wordType) => {
  return wordType === 2 ? (
    <div></div>
  ) : (
    <div id="" className="py-line-item py-line-item-btn">
      <span className='py-checkbox ${showWord ? "checked" : ""}' dangerouslySetInnerHTML={{ __html: checkedSvgs }}>
      </span>
      <span className="py-tab">显示汉字</span>
    </div>
  );
};

const showYinBiao = (wordType) => {
  return wordType === 3 ? (
    ""
  ) : (
    <div id="" class="py-line-item py-line-item-btn">
      <span class='py-checkbox ${showPinyin ? "checked" : ""} ' dangerouslySetInnerHTML={{ __html: checkedSvgs }}>
      </span>
      <span class="py-tab">显示拼音</span>
    </div>
  );
};

const showYinDiao = (wordType) => {
  return wordType === 3 ? (
    ""
  ) : (
    <div id="${IDs.MARKTONE}" class="py-line-item py-line-item-btn">
      <span class='py-checkbox checked' dangerouslySetInnerHTML={{ __html: checkedSvgs }}>
      </span>
      <span class="py-tab">标注音调</span>
    </div>
  );
};

export default Top;
