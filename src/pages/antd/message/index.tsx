import React, { useState } from 'react';
import { Button, message } from 'antd';

const MyComponent = () => {
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    setLoading(true);
    const hide = message.loading('Action in progress...', 0); // 显示加载中的消息

    try {
      // 模拟调用后端接口
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 替换为实际的 API 调用
      hide(); // 隐藏加载中的消息
      message.success('Operation successful!', 2); // 成功消息
    } catch (error) {
      hide(); // 隐藏加载中的消息
      message.error('Operation failed!', 2); // 错误消息
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={handleRequest} disabled={loading}>
        Start Request
      </Button>
    </div>
  );
};

export default MyComponent;
