import { decorationSvgs } from "../utils/svg_constants.ts";

const wordOptions = ({ config }) => {
  const { wordType } = config.options;
  const { up_down, left_right, four_line, square, combine } = decorationSvgs;
  return (
    <>
      <div
        id="${IDs.UPDOWN}"
        data-value="0"
        className="py-list-item ${wordType === 0 ? 'active': ''}"
      >
        <span className="py-low1" dangerouslySetInnerHTML={{ __html: up_down }}></span>
        <span>拼音上下</span>
      </div>
      <div
        id="${IDs.LEFTRIGHT}"
        data-value="1"
        className="py-list-item  ${wordType === 1 ? 'active': ''}"
      >
        <span className="py-low1" dangerouslySetInnerHTML={{ __html: left_right }}></span>
        <span>拼音左右</span>
      </div>
      <div
        id="${IDs.FOURLINE}"
        data-value="2"
        className="py-list-item ${wordType === 2 ? 'active': ''}"
      >
        <span className="py-low2" dangerouslySetInnerHTML={{ __html: four_line }}></span>
        <span>四线三格</span>
      </div>
      <div
        id="${IDs.SQUARE}"
        data-value="3"
        className="py-list-item ${wordType === 3 ? 'active': ''}"
      >
        <span className="py-low2" dangerouslySetInnerHTML={{ __html: square }}></span>
        <span>田字格</span>
      </div>
      <div
        id="${IDs.COMBINE}"
        data-value="4"
        className="py-list-item ${wordType === 4 ? 'active': ''}"
      >
        <span dangerouslySetInnerHTML={{ __html: combine }}></span>
        <span>组合形式</span>
      </div>
    </>
  );
};

export default wordOptions;
