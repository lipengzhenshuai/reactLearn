import React from 'react';

/**
 *
 * state:
 *  与props类似,但是是私有的，并且受控于当前组件
 *
 * @param {*} props
 */
function ClockFunc(props){
    const time = '09:00:00';
    return (
    <div>
        <h1>Hello, World</h1>
        <h1>It's {time}</h1>
    </div>
    );
}

function SonCom(props) {
    return ( <div>{props.title}</div> );
}

/**
 *
 * 将函数组件改装成class组件
 *
 *  1.创建一个同名的class,并且继承React.Component
 *  2.添加一个空的render()方法
 *  3.将函数体移到render方法之中
 *  4.在函数体中用this.props代替props
 *  5.删除剩余的空函数声明
 *
 */

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(),name: 'lipeng',title: 'myTitle'};
    }

    componentDidMount() {
        // this.timerID = setInterval(()=> {
        //     this.tick();
        // },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        /**
         *
         * setState你应该知道的三事:
         *  1.不要直接修改state,而是使用setState
         *  2.state的更新可能是异步的
         *  3.state的更新会别合并
         *
         */
        this.setState({
            date: new Date(),
            name: this.state.name + 'x'
        });
    }

    render() {
        /**
         * 组件可以选择把它的state作为props向下传递到他的子组件中
         */
        return (
        <div>
            <h1>Hello, World</h1>
            <h1>It's {this.state.date.toLocaleTimeString()}</h1>
            <h1>{this.state.name}</h1>
            <SonCom title = {this.state.title}/>
        </div>
        );
    }
}

export default Clock;

