import React, { useEffect, useState } from "react";
const Zi = (props) => {
  const [name, setName] = useState("Zi");

  const e = (event) => {
    // if (event.origin !== "http://your-parent-domain.com") {
    //   return;
    // }
    console.log("ZI Message received from parent:", event.data);
    const replyMessage = "Hello from iframe";
    event.source.postMessage(replyMessage, event.origin);
  };

  // useEffect(() => {
  //   window.addEventListener("message", e);
  //   return () => {
  //     window.removeEventListener("message", e);
  //   };
  // }, []);

  const updateParentName = () => {
    const message = 'Hello from iframe';
    window.parent.postMessage(message, 'http://your-child-domain.com');
  };

  return (
    <div>
      {name}
      <button onClick={updateParentName}>更新父节点的值</button>
    </div>
  );
};

export default Zi;
