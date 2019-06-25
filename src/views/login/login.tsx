import React from 'react';

export default class Login extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={{margin:'0 auto',width:'400px',paddingTop:'250px'}}>
                <div>username:&nbsp;&nbsp;<input type="text"/></div>
                <div>password:&nbsp;&nbsp;<input type="text"/></div>
            </div>
        );
    }

}
