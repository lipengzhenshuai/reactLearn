import React from 'react';
import StatusUp from './statusUp';

// https://stackoverflow.com/questions/48869369/property-value-does-not-exist-on-type-readonly

interface IMyComponentProps {
}

interface IMyComponentState {
    date: Date,
    state: number,
    arr: Array<number>,
    value1: string,
    fruit: string,
    val1: string,
    val2: string,
    temperature: string,
    temperature4F: string,
    timer: object | null
}


function BoliInfo(props: any) {
    if (Number(props.temperature) >= 100) {
        return <div>The water would boil.</div>
    } else {
        return <div>The water would not boil.</div>
    }
}

export default class Login extends React.Component <IMyComponentProps, IMyComponentState> {


    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date(),
            state: 1,
            arr: [1, 2, 3, 4],
            value1: '',
            fruit: '',
            val1: '',
            val2: '',
            temperature: '',
            temperature4F: '',
            timer: null
        };
    }

    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(): void {
        this.setState({
            date: new Date()
        })
    }

    handleClick = () => {
        this.setState({
            state: this.state.state === 1 ? 2 : 1
        })
    }

    handleChange = (event: any) => {

        this.setState({
            value1: event.target.value
        })
    }

    handleChange3 = (event: any) => {

        const name: string = event.target.name;
        // @ts-ignore
        this.setState({
            [name]: event.target.value
        })
    }


    handleChange2 = (event: any) => {

        if (event.target.name === 'temp1') { //摄氏温度
            this.setState({
                temperature: event.target.value,
                temperature4F: String(Number(event.target.value) + 30)
            })
        } else {
            this.setState({
                temperature4F: event.target.value
                , temperature: String(event.target.value - 30)
            })

        }
    }

    handleSumbit = (event: any) => {
        // alert(`submit value:${this.state.value1}....fruit value:${this.state.fruit}....fruit value:${this.state.fruit}
        // .....val1 value:${this.state.val1}.....val2 value:${this.state.val2}`);
        if (this.state.timer)
            return;
        let item = setTimeout(() => {
            this.setState({
                timer: null
            })
        }, 1000);
        this.setState({
            timer: item
        })
        console.log(1);
        event.preventDefault();
    }

    handleFruitChange = (event: any) => {
        this.setState({
            fruit: event.target.value
        })
    }

    render() {
        let item: object = {};
        if (this.state.state === 1) {
            item = <div>i am right</div>
        } else {
            item = <div>i am wrong</div>
        }

        const list = this.state.arr.map((item: number) => {
            return <ul key={item}>{item}</ul>
        })

        return (
            <div>
                <div>当前日期:{this.state.date.toLocaleTimeString()}</div>
                <button onClick={this.handleClick}>change Status</button>
                {item}
                {list}

                <form onSubmit={this.handleSumbit}>
                    <label>
                        提交内容： <input type="text" value={this.state.value1} onChange={this.handleChange}/>

                    </label>
                    <input type='submit' value="提交"/>
                </form>
                <br/>

                <label>
                    文章:
                    <textarea value={this.state.value1} onChange={this.handleChange}/>
                </label>
                <br/>
                <br/>

                <select value={this.state.fruit} onChange={this.handleFruitChange}>
                    <option value="watermelon">西瓜</option>
                    <option value="taozi">桃子</option>
                    <option value="mihoutao">猕猴桃</option>
                    <option value="jianling">剑灵</option>
                </select>

                <br/>
                <br/>

                <input type="text" name='val1' value={this.state.val1} onChange={this.handleChange3}/>
                <input type="text" name='val2' value={this.state.val2} onChange={this.handleChange3}/>
                <br/>
                <br/>
                状态提升：

                <input type="text" value={this.state.temperature} name='temp1' onChange={this.handleChange2}/>℃
                <input type="text" value={this.state.temperature4F} name='temp2' onChange={this.handleChange2}/>华氏温度
                <BoliInfo temperature={this.state.temperature}/>

                <StatusUp/>
            </div>
        );
    }
}
