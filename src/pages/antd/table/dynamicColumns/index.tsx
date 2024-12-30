import React, { useState } from "react";
import { Table, Button } from "antd";

const App: React.FC = () => {
  // 定义全部列信息
  const allColumns = [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "年龄", dataIndex: "age", key: "age" },
    { title: "地址", dataIndex: "address", key: "address" },
    { title: "电话", dataIndex: "phone", key: "phone" },
    { title: "邮箱", dataIndex: "email", key: "email" },
  ];

  // 定义部分列信息
  const partialColumns = allColumns.slice(0, 3); // 取前3列展示

  const [columns, setColumns] = useState(partialColumns);

  const toggleColumns = () => {
    // 切换展示部分列和全部列
    setColumns(columns.length === partialColumns.length ? allColumns : partialColumns);
  };

  const data = [
    { key: "1", name: "张三", age: 25, address: "北京", phone: "123456", email: "zhangsan@example.com" },
    { key: "2", name: "李四", age: 30, address: "上海", phone: "789012", email: "lisi@example.com" },
  ];

  return (
    <div>
      <Button onClick={toggleColumns}>
        {columns.length === partialColumns.length ? "展示全部列" : "展示部分列"}
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
