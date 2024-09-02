import { decorationSvgs } from "../utils/svg_constants.ts";
import { WordType as WordTypeEnum } from '../utils/constants.ts';

const wordOptions = ({ config, updateConfig }) => {
  const { wordType } = config.options;
  const { up_down, left_right, four_line, square, combine } = decorationSvgs;
  return (
    <>
      <div
        onClick={() => updateConfig('wordType', WordTypeEnum.UPDOWN)}
        className={`py-list-item ${wordType === WordTypeEnum.UPDOWN ? 'active': ''}`}
      >
        <span className="py-low1" dangerouslySetInnerHTML={{ __html: up_down }}></span>
        <span>拼音上下</span>
      </div>
      <div
        onClick={() => updateConfig('wordType', WordTypeEnum.LEFTRIGHT)}
        data-value="1"
        className={`py-list-item ${wordType === WordTypeEnum.LEFTRIGHT ? 'active': ''}`}
      >
        <span className="py-low1" dangerouslySetInnerHTML={{ __html: left_right }}></span>
        <span>拼音左右</span>
      </div>
      <div
        onClick={() => updateConfig('wordType', WordTypeEnum.FOURLINE)}
        data-value="2"
        className={`py-list-item ${wordType === WordTypeEnum.FOURLINE ? 'active': ''}`}
      >
        <span className="py-low2" dangerouslySetInnerHTML={{ __html: four_line }}></span>
        <span>四线三格</span>
      </div>
      <div
        onClick={() => updateConfig('wordType', WordTypeEnum.SQUARE)}
        className={`py-list-item ${wordType === WordTypeEnum.SQUARE ? 'active': ''}`}
      >
        <span className="py-low2" dangerouslySetInnerHTML={{ __html: square }}></span>
        <span>田字格</span>
      </div>
      <div
        onClick={() => updateConfig('wordType', WordTypeEnum.COMBINE)}
        data-value="4"
        className={`py-list-item ${wordType === WordTypeEnum.COMBINE ? 'active': ''}`}
      >
        <span dangerouslySetInnerHTML={{ __html: combine }}></span>
        <span>组合形式</span>
      </div>
    </>
  );
};

export default wordOptions;
