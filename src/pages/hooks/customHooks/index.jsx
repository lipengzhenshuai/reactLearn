import React from "react";
import FriendStatus from "./customHooks";

const CustomHooks = () => {
  const friend = { id: 1, name: "lipeng" };
  return <FriendStatus friend={friend}></FriendStatus>;
};

export default CustomHooks;
