import React, { useState } from "react";
import ScrollTable from "./ScrollTable.tsx";

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 2" },
    { id: 4, name: "Item 2" },
    { id: 5, name: "Item 2" },
    { id: 6, name: "Item 2" },
    { id: 7, name: "Item 2" },
    { id: 8, name: "Item 2" },
    { id: 9, name: "Item 2" },
    { id: 10, name: "Item 2" },
    { id: 11, name: "Item 2" },
    { id: 12, name: "Item 2" },
    { id: 13, name: "Item 2" },
    { id: 14, name: "Item 2" },
    { id: 15, name: "Item 2" },
    { id: 16, name: "Item 2" },
    { id: 17, name: "Item 2" },
    
  ]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      // 模拟异步加载更多数据
      const moreData = [
        { id: data.length + 1, name: `Item ${data.length + 1}` },
        { id: data.length + 2, name: `Item ${data.length + 2}` },
      ];
      setData((prevData) => [...prevData, ...moreData]);
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollTable
      columns={columns}
      dataSource={data}
      distance={50} // 距离底部 50px 时触发加载
      busy={loading} // 正在加载时禁用事件
      onScrollBottom={loadMoreData} // 滚动到底部触发加载更多
      rowKey="id" // 必须指定唯一标识
      pagination={false} // 关闭分页
      scroll={{ y: 400 }}
    />
  );
};

export default App;
