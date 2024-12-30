import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Text } = Typography;

const InfoCard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      extra={
        <Button type="text" icon={expanded ? <UpOutlined /> : <DownOutlined />} onClick={toggleExpand}>
          {expanded ? "关闭" : "展开"}
        </Button>
      }
      style={{ width: 400 }}
    >
      {expanded && (
        <div>
          <div>
            <Text strong>景别:</Text> 近景
          </div>
          <div>
            <Text strong>地点:</Text> 车站边的地面
          </div>
          <div>
            <Text strong>剧情时间:</Text> 傍晚
          </div>
          <div>
            <Text strong>角色动作:</Text> 玛利欧静候
          </div>
          <div>
            <Text strong>画面描述:</Text> 玛利欧蹲下身，专注地看着地面，手持报纸，露出紧张神情
          </div>
          <div>
            <Text strong>MJ提示词:</Text> Mario concentrating, newspapers on ground
          </div>
          <div>
            <Text strong>场景描述:</Text> 车站边静谧的地面，灰尘飞舞，报纸堆积
          </div>
          <div>
            <Text strong>镜头运动:</Text> 固定
          </div>
          <div>
            <Text strong>占用时间:</Text> 10秒
          </div>
          <div>
            <Text strong>旁白:</Text> 那声音是从那堆报纸和煤灰中传出来的。
          </div>
        </div>
      )}
    </Card>
  );
};

export default InfoCard;
