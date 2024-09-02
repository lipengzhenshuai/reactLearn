import { decorationSvgs } from "../utils/svg_constants.ts";
const checkedSvgs = decorationSvgs.checked;

const Top = ({ config, updateConfig }) => {
  const updateWordType = (type) => {
    switch(type) {
      case 'showWord':
        updateConfig('showWord', (config) => {
          config.options.showWord = !config.options.showWord;
          return JSON.parse(JSON.stringify(config));
        });
        break;
      case 'showPinyin':
        updateConfig('showPinyin', (config) => {
          config.options.showPinyin = !config.options.showPinyin;
          return JSON.parse(JSON.stringify(config));
        })
        break;
      case 'markTone':
        return updateConfig('markTone', (config) => {
          config.options.markTone = !config.options.markTone;
          return JSON.parse(JSON.stringify(config));
        })
      default:
        return;
    }
  }
  return (
    <div>
      {showHanZi(config, updateWordType)}
      {showYinBiao(config, updateWordType)}
      {showYinDiao(config, updateWordType)}
    </div>
  );
};

const showHanZi = (config, updateWordType) => {
  const {wordType, showWord} = config.options;
  return wordType === 2 ? (
    <div></div>
  ) : (
    <div onClick={() => updateWordType('showWord')} className="py-line-item py-line-item-btn">
      <span className={`py-checkbox ${showWord ? "checked" : ""}`} dangerouslySetInnerHTML={{ __html: checkedSvgs }}>
      </span>
      <span className="py-tab">显示汉字</span>
    </div>
  );
};

const showYinBiao = (config, updateWordType) => {
  const {wordType, showPinyin} = config.options;
  return wordType === 3 ? (
    ""
  ) : (
    <div onClick={() => updateWordType('showPinyin')} class="py-line-item py-line-item-btn">
      <span class={`py-checkbox ${showPinyin ? "checked" : ""}`} dangerouslySetInnerHTML={{ __html: checkedSvgs }}>
      </span>
      <span class="py-tab">显示拼音</span>
    </div>
  );
};

const showYinDiao = (config, updateWordType) => {
  const {wordType, markTone} = config.options;
  return wordType === 3 ? (
    ""
  ) : (
    <div onClick={() => updateWordType('markTone')} class="py-line-item py-line-item-btn">
      <span class={`py-checkbox ${markTone ? "checked" : ""}`} dangerouslySetInnerHTML={{ __html: checkedSvgs }}>
      </span>
      <span class="py-tab">标注音调</span>
    </div>
  );
};

export default Top;
