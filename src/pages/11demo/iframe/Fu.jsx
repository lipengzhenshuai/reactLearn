import React, { useRef, useEffect, useState } from "react";
const Fu = (props) => {
  const [name, setName] = useState("fu");

  // 这块代码打开有问题，因为项目启动之后一直有postmessage，具体不知道是哪个地方发出的

  // 可以通过在iframe上增加事件判断iframe是否加载成功，或者通过获取里面内容的状态来判断；iframe.windowContent;

  const iframeRef = useRef(null);
  const updateParent = () => {
    // const message = "Hello from parent";
    // iframeRef.current.contentWindow.postMessage(message);
  };

  const e = (event) => {
    // if (event.origin !== "http://your-parent-domain.com") {
    //   return;
    // }
    // console.log("Fu Message received from parent:", event.data);
    // const replyMessage = "Hello from iframe";
    // event.source.postMessage(replyMessage, event.origin);
  };

  useEffect(() => {
    window.addEventListener("message", e);
    return () => {
      window.removeEventListener("message", e);
    };
  }, []);

  return (
    <div>
      <button onClick={updateParent}>通知子页面</button>
      {name}
      <iframe
        ref={iframeRef}
        src="http://localhost:3001/demo/11/iframeZi"
      ></iframe>
    </div>
  );
};

export default Fu;
