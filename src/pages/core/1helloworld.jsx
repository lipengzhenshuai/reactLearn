import React, { useState } from 'react';

// const Demo1 = (props) => {
//     return <div>{props.children}</div>
// }

class HelloWorld extends React.Component {

    constructor() {
        super();
        this.state = {name: 'father'};
    }

    render() {
        // 1.直接输出文案
        // const element = <h1>hello world!</h1>;
        // return (element);

        // // 2.输出文案加变量
        // const name = 'lipeng';
        // const element = <h1>hello {name}!</h1>;
        // return (element);

        // 3.输出文案使用函数和变量
        // const obj = {
        //     name: 'lipeng',
        //     age: 23
        // };
        // function getUserInfo(obj) {
        //     return `name: ${obj.name},age: ${obj.age}`;
        // }
        // const element = <h1>hello {getUserInfo(obj)}!</h1>;
        // return (element);

        // 4.表达式作为变量进行处理
        // function getEle(user) {
        //     if(user) {
        //         return <h1>my name is {user.name}</h1>
        //     } else {
        //         return <h1>need login</h1>
        //     }
        // }
        // return (getEle());

        // 5.元素属性可以使用变量
        // const index = 22;
        // const element1 = <h1 tabIndex = "0">0</h1>
        // const element2 = <h1 tabIndex = {index}>{index}</h1>
        // return (<div>
        //     {element1}
        //     {element2}
        // </div>);

        // // 6.jsx标签可以包含很多子元素
        // const element = (
        //     <div>
        //         <h1>hello!</h1>
        //         <h1>good luck to see you!</h1>
        //     </div>);

        // return element;

        // 7.你可以安全的在JSX中插入用户输入的内容，不会发生jsx攻击
        // 8.JSX最后会被转义成React.createElement()函数
        // return <div>
        //     <Demo1>{this.state.name}</Demo1>
        // </div>;
        return <div>hello world!</div>
    }
}

export default HelloWorld;