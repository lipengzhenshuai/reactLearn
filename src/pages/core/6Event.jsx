import React from 'react';


export default class A extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: 'lipeng',arr:[1,2,3,4,5]};
    }

    // 不能通过返回false阻止默认事件
    // 使用箭头函数避免this指向问题
    showName = ()=> {
        alert(this.state.name);
    }

    deleteRow = (id,e)=> {
        alert(id);
    }

    render() {

        const arrItem = this.state.arr.map((element) =>  (<button onClick={(e) => this.deleteRow(element, e)}>{element}</button>));

        return (
        <div>
            <div>
                <button onClick={this.showName}>点击</button>
            </div>
            <div>
                {arrItem}
            </div>
        </div> );
    }

}

