import React from 'react';

class LiefCycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             name:'lipeng'
        };
    }

    updateName = ()=> {
        this.setState({
            name:this.state.name + '1'
        });
    }


    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return ( 
            <div> <button onClick={this.updateName}>update Name</button></div>
        )
    }
}

class Content extends React.Component {

    constructor(props) {
       super(props);
       this.state = {visible: true}
    }

    showOrHide = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.showOrHide}> show Or hide</button>
                {
                       this.state.visible && <LiefCycle></LiefCycle>
                }
            </div>
        )
    }

}

export default Content;