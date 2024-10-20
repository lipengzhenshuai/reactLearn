import { useRef } from 'react';
import ChildCom from './childCom';
import Info from '@/components/Info'

const App = () => {
  const childRef = useRef();
  const logRunRef = () => {
    childRef.current.sayName();
  };

  return (
    <div>
      <Info>
        <div>useRef的使用</div>
        <div>1.父组件使用useRef初始化个实例，传给子组件</div>
        <div>2.子组件使用forwardRef接一下</div>
        <div>3.useImperativeHandle设置父组件可以访问的子组件信息</div>
      </Info>
      <button onClick={logRunRef}>输出REF（父组件）</button>
      <ChildCom ref={childRef} />
    </div>
  );
};
export default App;
