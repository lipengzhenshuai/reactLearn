import React from 'react';
import style from './main.module.scss';
export default class Main extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={style.main}>
                {this.props.children}
            </div>
        );
    }
}
