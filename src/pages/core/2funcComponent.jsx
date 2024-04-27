import React from 'react';
//* 1.函数模式的组件
// export default function Welcome(props){
//     return <h1>Hello, {props.name || 'lipeng'}</h1>;
// }

//* 2.函数组件作为子组件
// function Welcome(props){
//     return <h1>Hello, {props.name || 'lipeng'}</h1>;
// }

// export default function func(props){
//     return <Welcome name='hahaha'></Welcome>
// }

//* 3.函数组件作为子组件，同时，多个函数可以作为多个子组件
function Welcome(props){
    return <h1>Hello, {props.name || 'lipeng'}</h1>;
}

export default function func(props){
    return ( <div>
        <Welcome name='hahaha'></Welcome>
        <Welcome name='hahaha2'></Welcome>
        <Welcome name='hahaha3'></Welcome>
    </div> )
}

// 函数式组件必须是纯函数，保证它的props不受子组件影响