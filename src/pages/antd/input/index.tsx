import React, { useState, useRef } from 'react';
import { Input } from 'antd';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null); // 用于引用 Input 组件

  const handleChange = (e) => {
    console.log(1111);
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart; // 保存光标位置

    // 正则匹配以 "h" 开头，以 "g" 结尾的字符串，并替换为空
    const modifiedValue = value.replace(/h\w*g/g, '');

    // 更新状态，并保留光标位置
    setInputValue(modifiedValue);
    
    // 等待 React 完成 DOM 更新后恢复光标位置
    setTimeout(() => {
      if (inputRef.current) {
        // 恢复光标到原位置
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Input
        ref={inputRef} // 绑定引用
        value={inputValue}
        onChange={handleChange}
        placeholder="输入包含 h 开头 g 结尾的内容将被替换"
      />
    </div>
  );
};

export default App;
