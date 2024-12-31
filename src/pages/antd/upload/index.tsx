import React, { useState } from "react";
import { Tabs } from "antd";
import BasicUse from "./basic-use";
import CustomImgUpload from "./custom-img-upload";

const Total = (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="选择知识点树" key="1">
          <BasicUse />
        </Tabs.TabPane>
        <Tabs.TabPane tab="选择讲次树" key="2">
          <CustomImgUpload />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Total;
