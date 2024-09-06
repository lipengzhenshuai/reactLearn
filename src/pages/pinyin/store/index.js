import { createStore } from 'redux';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "showWord":
      return {
        ...state,
        options: {
          ...state.options,
          showWord: !state.options.showWord
        }
      };
    case "showPinyin":
      return {
        ...state,
        options: {
          ...state.options,
          showPinyin: !state.options.showPinyin
        }
      };
    case "markTone":
      return {
        ...state,
        options: {
          ...state.options,
          markTone: !state.options.markTone
        }
      };
      case "wordType":
        return {
          ...state,
          options: {
            ...state.options,
            wordType: action.params
          }
        }
      case "pinyinType":
        return {
          ...state,
          options: {
            ...state.options,
            pinyinType: action.params
          }
        }
      case "pinyinStyle":
          return {...action.config}
      case "useFontWidth":
        return {
          ...state,
          options: {
            ...state.options,
            useFontWidth: !state.options.useFontWidth
          }
        }
      case "fontWidth":
        return {
          ...state,
          options: {
            ...state.options,
            fontWidth: action.value
          }
        }
      case "updateData":
        const temp = [...state.data];
        temp.splice(action.index, 0, ...action.value);
        return {
          ...state,
          data: temp
        }

    default: return state;
  }
}
// store
const store = createStore(reducer, {
  data: [
    // {
    //     "word": "你",
    //     "pinyin": "nǐ",
    //     "pysData": [],
    //     "type": 1
    // },
    // {
    //     "word": "好",
    //     "pinyin": "hǎo",
    //     "pysData": [
    //         "hǎo",
    //         "hào"
    //     ],
    //     "type": 1
    // }
],
  options: {
    wordType: 0, // 上下,左右,四线三格，田字格，组合等
    pinyinType: 0, // 1 - 标准，2 - 首字母大写，3 - 大写
    fontWidth: 2, // 文字相对宽度
    useFontWidth: false, // 是否使用字体宽度
    wordStyle: {
      show: true,
      fontSize: "默认",
      fontFamily: "inherit",
      color: "inherit",
    }, // 字体、大小、字色、显示汉字
    pinyinStyle: {
      show: true,
      fontSize: "默认",
      fontFamily: "inherit",
      color: "inherit",
    }, // 字体、大小、字色、标注声调、显示拼音，u是否去点
    showWord: true,
    showPinyin: true,
    markTone: true,
    uKeepPoint: true,
  },
});
export default store;
