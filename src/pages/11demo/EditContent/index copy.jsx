import React, { useEffect, useState } from 'react';
import './index.less';
export const Demo = () => {

  console.log(11111);

  const [data, setData] = useState([]);

  const handleClick = function () {

    const editableDiv = document.getElementById("editable");

    // 创建自定义标记
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.contentEditable = "true";  // 允许编辑标签内的文字
    tag.textContent = "[输入标记]";  //  内容
    // tag.setAttribute("data-placeholder", "[输入标记]");

    // 插入标记到当前光标位置
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      // 检查光标是否在span标签内部
      const isInsideSpan = (node) => {
        while (node && node !== editableDiv) {
          if (node.nodeName === 'SPAN') return true;
          node = node.parentNode;
        }
        return false;
      };

      if (isInsideSpan(range.commonAncestorContainer)) {
        alert('无法在标记内插入标记');
        return;
      }

      // 删除选中的内容
      range.deleteContents();

      // 插入新标签
      range.insertNode(tag);

      // 创建一个空的文本节点放在标签后面，确保光标移到标签外
      const space = document.createTextNode("\u00A0");  // 使用空格字符
      tag.after(space);

      // 将光标移到标签后的空白处
      range.setStartAfter(space);
      range.setEndAfter(space);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  const handleKeyDown = event => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const currentNode = range.startContainer;

    // 如果按下的是 Backspace 键
    if (event.key === "Backspace") {
      const previousNode = currentNode.previousSibling;
      console.log('lipeng-🚀- ~ previousNode:', previousNode)
      console.log('lipeng-🚀- ~ range.startOffset:', range.startOffset)

      // 如果前一个节点是自定义标签并且光标在标签前
      if (previousNode && previousNode.classNameNameList && previousNode.classNameNameList.contains("tag")) {
        if (range.startOffset === 3) {
          event.preventDefault();  // 阻止默认删除操作
          previousNode.remove();    // 删除整个标签
        }
      }
    }
  }

  const validateData = () => {
    const spans = document.querySelectorAll('div.editable-box span');
    const regex = /^\[[^\]]*\]$/;

    // 正确的情况：
    // [例如：【】。【】数字] ， [2,,2]
    // 不正确的情况: qqwqw], [sdfsdf,  [sdfsdfsd]dfsdf
    spans.forEach(span => {
      if (!regex.test(span.textContent)) {
        console.log(`Invalid content: ${span.textContent}`);
        setTimeout(() => { alert(`${span.textContent} 格式错误，请检查`) })
      } else {
        console.log(`Valid content: ${span.textContent}`);
      }
    });
  }
  const parse = (htmlContent) => {
    // 正则表达式
    const regex = /<span([^>]*)>(.*?)<\/span>/g;
    // 替换函数
    htmlContent = htmlContent.replace(regex, (match, p1, p2) => {
      const placeholderText = p2.replace(/\[|\]/g, ''); // 去掉方括号
      return `<span${p1} data-placeholder="${placeholderText}"></span>`;
    });
    return htmlContent;
  }


  const geneInsert = () => {
    const editableDiv = document.getElementById("editable");
    const content = editableDiv.innerHTML;
    document.getElementById('container').innerHTML = parse(content);
    // 
  }

  // 
  const getText = () => {
    const result = document.getElementById("container").textContent;
    document.getElementById("result").innerHTML = result;
  }

  return (
    <>
      <img src="./img/image.png" style={{ width: '100%' }} />
      <div className="editable-box">帮我写一个故事，类型为<span className="tag" suppressContentEditableWarning contentEditable="true">[例如：科幻]</span>&nbsp;，写作风格模仿<span className="tag" contentEditable="true">[例如：村上春树]</span>&nbsp;，字数<span className="tag" contentEditable="true">[输入数字]</span>&nbsp;左右。写作提示：层层递进、层次清晰、逻辑严密、文采斐然、表述生动形象、<span className="tag" contentEditable="true">[其他补充要求]</span>&nbsp;。</div>
      <div id="editable" suppressContentEditableWarning contentEditable="true" className="editable-box" onKeyDown={handleKeyDown}>帮我写一个故事，类型为<span className="tag" contentEditable="true">[例如：科幻]</span>&nbsp;，写作风格模仿<span className="tag" contentEditable="true">[例如：村上春树]</span>&nbsp;，字数<span className="tag" contentEditable="true">[输入数字]</span>&nbsp;左右。写作提示：层层递进、层次清晰、逻辑严密、文采斐然、表述生动形象、<span className="tag" contentEditable="true">[其他补充要求]</span>&nbsp;。</div>
      <button onClick={handleClick} >插入标记</button><br />
      <button onClick={validateData}>校验内容</button><br />
      <button onClick={geneInsert}>生成插入</button><br />
      <div id="container" className="content-box"></div>
      <button onClick={getText}>获取内容</button><br />
      <div id="result"></div>
      <button onClick={() => {setData([1,2])}}>更新data</button><br />
      {data.map(item => <div>{item}</div>)}
    </>
  )
}

export default Demo;