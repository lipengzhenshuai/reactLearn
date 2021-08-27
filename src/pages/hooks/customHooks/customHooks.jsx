import React, { useState, useEffect } from "react";
import EventEmitter from "./event";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    EventEmitter.on(friendID, handleStatusChange);
    return () => {
      EventEmitter.off(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

const FriendStatus = (props) => {
  const isOnline = useFriendStatus(props.friend.id);

  // 3.5s更新状态
  setTimeout(() => {
    EventEmitter.emit(props.friend.id, { isOnline: true });
  }, 3500);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
};

export default FriendStatus;
