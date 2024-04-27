import React from 'react';


function BoilingRedirect(props) {
    if(props.temperature < 100){
        return <div>水不会沸腾</div>
    }else {
        return <div>水将沸腾</div>
    }
}

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.props.handleChange;
    }

    render() {
        const {temperature} = this.props;
        const {scale} = this.props;
        return ( 
            <div>
                <legend>输入水的温度: {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}


function toCelsius(value) {
    return (value - 32) * 5 / 9;
}

function toFahrenheit(value) {
    return (value * 9) / 5 + 32;
}

function convert(value, convert) {
    const float = parseFloat(value);
    if(isNaN(float)) {
        return '';
    }
    const output = convert(value);
    const round = Math.round(output * 1000) / 1000;
    return round;
}

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {temperature: 0, scale: 'c'};
        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }

    handleCelsius(e) {
        this.setState({temperature: e.target.value, scale: 'c'});
    }

    handleFahrenheit(e) {
        this.setState({temperature: e.target.value, scale: 'f'});
    }

    render() {
        const { temperature, scale } = this.state;

        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} handleChange={this.handleCelsius}></TemperatureInput>
                <TemperatureInput scale="f" temperature={fahrenheit} handleChange={this.handleFahrenheit}></TemperatureInput>
                <BoilingRedirect temperature={celsius}></BoilingRedirect>
            </div>
        )
    }

}