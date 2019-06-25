import React from 'react';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

export default class Login extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <SideBar/>
                <NavBar/>
                <Main>
                    {this.props.children}
                </Main>
            </div>
        );
    }
}
