import React from 'react';


/**
 * 
 * 部分UI的错误不应该导致整个应用程序的崩溃，为了解决这个问题，react16引入了错误边界
 * 
 *  错误边界是一种React组件，可以捕获并且打印发生在子组件树任何位置的JS错误，并且会渲染出备用组件
 * 
 * 
 */

export default class codeSplit extends React.Component {

    render() {
        return ( <div></div>)
    }
}