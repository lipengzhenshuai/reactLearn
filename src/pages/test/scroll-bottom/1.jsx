import React, { useState, useEffect } from "react";
import "./index.less";
import EmptyIcon from "./asset/img/empty.png";
import HighLight from '../../../components/HighLight/index.tsx';
/**
 *
 * 参考文档：【腾讯文档】滚动加载https://docs.qq.com/doc/DSmZFcUZCY0FxZ3Np
 *
 * 根据不同状态
 *
 * @param {*} props
 * @returns
 */

const Demo = (props) => {
  const [fistLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  // 模拟加载数据的函数
  const fetchData = (isAdd) => {
    setLoading(true);
    // 模拟异步请求
    setTimeout(() => {
      const newData = Array.from(
        { length: 10 },
        (_, index) => `Item ${list.length + index}`
      );
      setList((prevData) =>
        isAdd
          ? [...prevData, ...newData]
          : Math.random() > 0.99
          ? []
          : [...prevData, ...newData]
      );
      setLoading(false);
      setFirstLoad(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
          <div>
            滚动加载的逻辑
          </div>
          <div>
            首先是触发滚动的条件：
              这个是dom层面的逻辑：
            scrollHeight:包含滚动区域的高度
            scrollTop:向下滚动的距离，没有滚动的时候这个值为0
            clientHeight:可见区域的高度
            所以：当滚动的高度+可见高度 >= 所有区域高度的时候说明滚动到底部了；
          </div>
          <div>
              然后是触发的逻辑状态：
                这个属于react范畴：
                  1.是否首次加载
                  2.是否加载完毕
                  3.是否有更多数据
          </div>
          <HighLight code={`const List = ({ loading, list, fetchData }) => {
  const scroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight + 30 >= scrollHeight) {
      fetchData(true);
    }
  };`} languages="js" />
      </div>
      <div className="courseCenter">
        {fistLoad ? (
          <FirstLoad />
        ) : list.length === 0 ? (
          <NoData />
        ) : (
          <List loading={loading} list={list} fetchData={fetchData} />
        )}
      </div>
    </>
  );
};

const List = ({ loading, list, fetchData }) => {
  const scroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight + 30 >= scrollHeight) {
      fetchData(true);
    }
  };

  return (
    <div>
      <div>{loading ? "加载中..." : "未加载"}</div>
      <div onScroll={scroll} style={{ height: 100, overflow: "auto" }}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const NoData = () => {
  return (
    <div className="course-empty">
      <img alt="" src={EmptyIcon} />
      <span>没有找到符合筛选条件的课程</span>
    </div>
  );
};

const FirstLoad = () => {
  return <div>首次加载中...</div>;
};

export default Demo;
