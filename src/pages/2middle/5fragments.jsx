import React, { Fragment } from "react";

/**
 ** 在不增加子节点的情况下，将多个节点进行组合；
 ** 简写： <></>
 */

// 简写
function FragmentsFunc() {
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  );
}

// 带key
function FragmentsKeyFunc() {
  let a = [
    {
      name: "lipeng",
      age: 23,
    },
    {
      name: "lipeng2",
      age: 21,
    },
  ];
  return a.map((item) => (
    <Fragment>
      <div>{item.name}</div>
      <div>{item.age}</div>
    </Fragment>
  ));
}

export default class codeSplit extends React.Component {
  render() {
    return (
      <Fragment>
        <FragmentsFunc></FragmentsFunc>
        <FragmentsKeyFunc></FragmentsKeyFunc>
        <div>Fragment1</div>
        <div>Fragment2</div>
        <div>Fragment3</div>
      </Fragment>
    );
  }
}
