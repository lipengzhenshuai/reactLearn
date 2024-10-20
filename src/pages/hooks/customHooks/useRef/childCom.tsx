import { Input } from "antd";
import { useImperativeHandle, forwardRef, useState } from "react";

// 子组件
const FancyButton = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  // 使用 useImperativeHandle 暴露给父组件的方法或属性
  useImperativeHandle(ref, () => ({
    sayName,
  }));

  function sayName() {
    console.log(name);
  }

  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
});

export default FancyButton;
