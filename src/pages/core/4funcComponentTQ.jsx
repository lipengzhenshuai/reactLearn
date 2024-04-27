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
 ** 思路:将一个复杂的代码抽象成多个组件
 **  将用户个人信息拆成一个组件
 **  将评论区拆成一个组件
 **  通过props将属性传给子组件
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
      <UserInfo author = {{avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F28%2F20200428111132_qrebs.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1716799866&t=44c0af959037374687bfd84f62928bf7',name: 'name'}} ></UserInfo>
      <CommentInfo text= 'text' date = 'data'></CommentInfo>
    </div>
  );
}

  export default Comment;