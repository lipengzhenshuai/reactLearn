import React from "react";

export default class Cycle extends React.Component {
  render() {
    const numbersOne = [1, 2, 3, 4];
    const numbersDoule = numbersOne.map((item) => item * 2);
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((item) => (
      <div>
        <a key={item.toString()} href="baidu.com">
          {item}
        </a>
      </div>
    ));
    return (
      <div>
        {numbersDoule}
        <br />
        {listItems}
        <div>----------- 基本用法 -----------------</div>
        <NumberList number={numbersOne}></NumberList>
        <div>------------ 错误使用key ------------------</div>
        <NumberListError number={numbersOne}></NumberListError>
        <div>-------------- 正确使用key ----------------</div>
        <NumberListRight number={numbersOne}></NumberListRight>
        <div>------------ 在JSX中嵌入map ------------------</div>
        {numbers.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}

/**
 *
 * @param {*} props
 *
 *  key
 *  1.帮助识别哪些元素改变了,比如被添加还是被删除
 *  2.key最好是这个列表中独一无二的字符串，通常使用元素的id
 *  3.万不得已使用index作为索引
 */

function NumberList(props) {
  const number = props.number;
  const listItems = number.map((item) => {
    return <div key={item.toString()}>{item}</div>;
  });
  return listItems;
}

/**
 *
 * 元素的key只有放在数组就近的上下文中才有意义
 * key在兄弟节点之间必须唯一
 */

function NumberListError(props) {
  const number = props.number;
  return (
    <ul>
      {number.map((item) => {
        return <ListItems number={item}></ListItems>;
      })}
    </ul>
  );
}

function ListItems(props) {
  const number = props.number;
  return <li key={number}>{number}</li>;
}

function NumberListRight(props) {
  const number = props.number;
  const listItems = number.map((item) => {
    return <ListItemsRight key={item} number={item}></ListItemsRight>;
  });
  return <ul>{listItems}</ul>;
}

function ListItemsRight(props) {
  const number = props.number;
  return <li>{number}</li>;
}
