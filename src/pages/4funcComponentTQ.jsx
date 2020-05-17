import React, { Component } from 'react';

function CommentOld(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}


/**
 *
 * @param {*} props
 *
 * 思路:将一个复杂的代码抽象成多个组件
 *  将用户个人信息拆成一个组件
 *  将评论区拆成一个组件
 *  通过props将属性传给子组件
 */

 function UserInfo(props) {
    return (
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
    );
 }

 function CommentInfo(props) {
  return (
    <div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
 }

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author = {{avatarUrl: 'https://test-i.gsxcdn.com/1480131_bln89xyp.jpg',name: 'name'}} ></UserInfo>
      <CommentInfo text= 'text' date = 'data'></CommentInfo>
    </div>
  );
}

  export default Comment;