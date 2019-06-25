import React from 'react';

// https://stackoverflow.com/questions/48869369/property-value-does-not-exist-on-type-readonly

interface IMyComponentProps {
}

interface IMyComponentState {
    templature: string,
    scale: string
}


function BoilingVerdict(props: any) {
    if (Number(props.celsius) >= 100) {
        return <div>The water would boil.</div>
    } else {
        return <div>The water would not boil.</div>
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class Login extends React.Component <IMyComponentProps, IMyComponentState> {

    constructor(props: any) {
        super(props);
        this.handlecChange = this.handlecChange.bind(this);
        this.handlefChange = this.handlefChange.bind(this);
        this.state = {templature: '', scale: 'c'};
    }

    handlecChange(event: any) {
        this.setState({
            templature: event.target.value,
            scale: 'c'
        })
    }

    handlefChange(event: any) {
        this.setState({
            templature: event.target.value,
            scale: 'f'
        })
    }

    render() {
        // @ts-ignore
        let a = this.state.scale === 'c' ? (this.state.templature) : (this.state.templature - 70);
        let b = this.state.scale === 'c' ? (Number(this.state.templature) + 70) : this.state.templature;

        return (
            <div>
                <TemperatureInput scaleNames='c' templature={a}
                                  onTemperatureChange={this.handlecChange}/>
                <TemperatureInput scaleNames='f' templature={b}
                                  onTemperatureChange={this.handlefChange}/>
                <BoilingVerdict celsius={a}/>
            </div>
        );
    }

}

class TemperatureInput extends React.Component<any, any> {
    constructor(props: { scale: string }) {
        super(props);
    }


    render() {
        return (
            <div>
                // @ts-ignore
                <div>当前温度是：{scaleNames[this.props.scale]}</div>
                <input type="text" value={this.props.templature} onChange={this.props.onTemperatureChange}/>
            </div>
        );
    }

}

