import React, { useEffect, useRef, useCallback } from "react";
import { Table } from "antd"; // 使用 Ant Design 的 Table 组件
import { debounce } from "lodash";

const ScrollTable = ({ distance = 0, busy = false, onScrollBottom, ...props }) => {
  const lastScrollLeft = useRef(0);
  const tableBodyRef = useRef(null);

  // 处理滚动逻辑
  const handleScroll = useCallback(
    ({ target: { scrollHeight, scrollTop, clientHeight, scrollLeft } }) => {
      if (busy) return;

      // 判断是否滚动到底部并触发事件
      if (
        lastScrollLeft.current === scrollLeft &&
        scrollHeight - scrollTop - clientHeight <= distance
      ) {
        if (onScrollBottom) onScrollBottom();
      }

      // 更新最后的水平滚动位置
      lastScrollLeft.current = scrollLeft;
    },
    [busy, distance, onScrollBottom]
  );

  // 使用防抖处理滚动事件
  const debouncedScroll = useCallback(debounce(handleScroll, 200), [handleScroll]);

  // 绑定和解绑滚动事件
  useEffect(() => {
    const scrollEl = tableBodyRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", debouncedScroll);
      return () => {
        scrollEl.removeEventListener("scroll", debouncedScroll);
      };
    }
  }, [debouncedScroll]);

  // 在组件渲染后获取表格的滚动区域 DOM 元素
  useEffect(() => {
    const tableEl = document.querySelector(".ant-table-body");
    tableBodyRef.current = tableEl;
  }, []);

  return (
    <Table
      {...props}
      components={{
        body: {
          wrapper: (bodyProps) => (
            <div {...bodyProps} className="ant-table-body" ref={tableBodyRef}>
              {bodyProps.children}
            </div>
          ),
        },
      }}
    />
  );
};

export default ScrollTable;
