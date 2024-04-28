import React from "react";

/**
 ** 引用某个dom节点；目前大部分使用function函数，class的写法已经很少了；
 */

// 这个组件支持将ref传入，然后指向内部的某个dom
const FancyButton = React.forwardRef((props, ref) => (
  <button onClick={props.click} ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 可以直接获取 DOM button 的 ref
const ref = React.createRef();

// 可以通过ref在子组件初始化完成之后访问其dom
export default class refs extends React.Component {
  click = (e) => {
    setTimeout(() => {
      console.log(ref);
    }, 100);
  };

  render() {
    return (
      <div>
        <FancyButton click={this.click} ref={ref}>
          Click me!
        </FancyButton>
      </div>
    );
  }
}
