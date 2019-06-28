import React from 'react';

function FancyBorder(props: any) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}


function Dialog(props: any) {
    return (
        <div>
            <FancyBorder>
                {props.title}
            </FancyBorder>

            <FancyBorder>
                {props.message}
            </FancyBorder>
            {props.children}
        </div>
    )

}

interface IMyComponentProps {

}

interface IMyComponentState {
    username: string,
    pwd: string
}

export default class SignUpDialog extends React.Component<IMyComponentProps, IMyComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            pwd: ''
        }
        this.handleUNChange = this.handleUNChange.bind(this)
        this.handlePWDChange = this.handlePWDChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleUNChange(event: any) {
        this.setState({
            username: event.target.value
        })
    }

    handlePWDChange(event: any) {
        this.setState({
            pwd: event.target.value
        })
    }

    onSubmit(event:any) {
        alert(`username:${this.state.username},password:${this.state.pwd}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Dialog title='hello world' message='welcome to my space'>
                    <div>
                        <label>
                            用户名:
                            <input type="text" value={this.state.username} onChange={this.handleUNChange}/>
                        </label>

                        <label>
                            密码:
                            <input type="password" value={this.state.pwd} onChange={this.handlePWDChange}/>
                        </label>
                        <input type="submit" onClick={this.onSubmit}/>
                    </div>
                </Dialog>
            </div>
        );
    }

}
