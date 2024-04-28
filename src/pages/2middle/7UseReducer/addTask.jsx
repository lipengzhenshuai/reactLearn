import { useState } from 'react';

function MyComponent(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      // 调用父组件传递的回调函数，并将输入值作为参数传递
      props.onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="输入内容"
      />
      <button onClick={handleAddItem}>添加</button>
    </div>
  );
}

export default MyComponent;
