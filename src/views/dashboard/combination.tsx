import React from 'react';

function FancyBorder(props: any) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function SplitPane(props: any) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
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

        </div>
    )
}

function WelcomeDialog2(props: any) {
    return (
        <div>
            <Dialog title='welcome' message='welcome lipeng'></Dialog>
        </div>
    )
}


export default function WelcomeDialog() {

    return (
        <div>
            <FancyBorder color='blue'>
                <h1 className="Dialog-title">
                    Welcome,lipeng
                </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>

            <SplitPane
                left={
                    <div>
                        i am left
                    </div>
                }
                right={
                    <div>i am right</div>
                }
            >
            </SplitPane>
            <WelcomeDialog2></WelcomeDialog2>
        </div>
    )


}

